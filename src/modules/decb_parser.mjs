/**
 * Decomposes a DECB binary file into its different sections.
 * 
 * @param binaryBuffer uint8 buffer containing the DECB binary file to analyze
 * @return { status: int, msg: string, execAddress: int, sections: Array of { startAddress: int, length: int, data: ArrayBuffer} } 
 */

export function decbParse(binaryBuffer) {
    const states = {
        PREAMBLE_MAGIC_NUMBER: "preamble_magic_number",
        PREAMBLE_LEN_1: "preamble_len_1",
        PREAMBLE_LEN_2: "preamble_len_2",
        PREAMBLE_ADDR_1: "preamble_addr_1",
        PREAMBLE_ADDR_2: "preamble_addr_2",
        DATA: "data",
        preamble_or_postamble_magic_number: "preamble_or_postamble_magic_number",
        POSTAMBLE_ZERO_1: "postamble_zero_1",
        POSTAMBLE_ZERO_2: "postamble_zero_2",
        POSTAMBLE_EXEC_ADDR_1: "postamble_exec_addr_1",
        POSTAMBLE_EXEC_ADDR_2: "postamble_exec_addr_2",
        END: "end"
    };

    const input = new Uint8Array(binaryBuffer);

    let sections = [];

    let state = states.PREAMBLE_MAGIC_NUMBER;

    let sectionLen = 0x00;
    let beginAddr = 0x00;
    let execAddr = 0x00;

    let dataCount = 0x00;

    let initDataSectionIndex;

    for (let i = 0; i < input.byteLength; ++i) {

        if (states.PREAMBLE_MAGIC_NUMBER === state) {
            if (input[i] != 0) {
                return { status: -1, msg: "Invalid first preamble magic number. Parsing aborted." };
            }

            state = states.PREAMBLE_LEN_1;

        }
        else if (states.PREAMBLE_LEN_1 === state) {
            sectionLen = input[i];
            sectionLen <<= 8;

            state = states.PREAMBLE_LEN_2;
        }
        else if (states.PREAMBLE_LEN_2 === state) {
            sectionLen += input[i];

            state = states.PREAMBLE_ADDR_1;
        }
        else if (states.PREAMBLE_ADDR_1 === state) {
            beginAddr = input[i];
            beginAddr <<= 8;

            state = states.PREAMBLE_ADDR_2;
        }
        else if (states.PREAMBLE_ADDR_2 === state) {
            beginAddr += input[i];

            dataCount = 0;
            initDataSectionIndex = i + 1;
            state = states.DATA;
        }
        else if (states.DATA === state) {
            ++dataCount;

            if (dataCount >= sectionLen) {

                sections.push({ startAddress: beginAddr, length: dataCount, data: input.slice(initDataSectionIndex, i+1) });
                state = states.PREAMBLE_OR_POSTAMBLE_MAGIC_NUMBER;
            }
        }
        else if (states.PREAMBLE_OR_POSTAMBLE_MAGIC_NUMBER === state) {
            if (0 === input[i]) {
                state = states.PREAMBLE_LEN_1;
            }
            else if (0xFF === input[i]) {
                state = states.POSTAMBLE_ZERO_1;
            }
            else {
                return { status: -1, msg: "Preamble/postamble magic number not found. Parsing aborted." };
            }
        }
        else if (states.POSTAMBLE_ZERO_1 === state) {
            //if (input[i] != 0x00)
            //    std::cout << "Warning! Postable zero 1 is not 0." << std::endl;

            state = states.POSTAMBLE_ZERO_2;
        }
        else if (states.POSTAMBLE_ZERO_2 === state) {
            //if (input[i] != 0x00)
            //    std::cout << "Warning! Postable zero 2 is not 0." << std::endl;

            state = states.POSTAMBLE_EXEC_ADDR_1;
        }
        else if (states.POSTAMBLE_EXEC_ADDR_1 === state) {
            execAddr = input[i];
            execAddr <<= 8;

            state = states.POSTAMBLE_EXEC_ADDR_2;

        }
        else if (states.POSTAMBLE_EXEC_ADDR_2 === state) {
            execAddr += input[i];
            state = states.END;
        }
        else {
            return { status: -1, msg: "Invalid parser state." };
        }

    }

    if (state != states.END) {
        return { status: -1, msg: "Invalid input." };
    }


    return { status: 0, msg: "Ok", execAddress: execAddr, sections: sections };
};

