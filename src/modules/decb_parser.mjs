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

  const inputBuffer = new Uint8Array(binaryBuffer);

  let sections = [];

  let state = state.PREAMBLE_MAGIC_NUMBER;

  let sectionLen = 0x00;
  let beginAddr = 0x00;
    int endAddr;
    int execAddr;

    size_t dataCount;

    for (let i = 0; i < inputBuffer.byteLength(); ++i)
    {
        if (State::PREAMBLE_MAGIC_NUMBER == state)
        {
            if (input[i] != 0)
            {
                std::cerr << "Invalid first preamble magic number. Parsing aborted." << std::endl;
                return 1;
            }

            state = State::PREAMBLE_LEN_1;

        }
        else if (State::PREAMBLE_LEN_1 == state)
        {
            sectionLen = input[i];
            sectionLen <<= 8;

            state = State::PREAMBLE_LEN_2;
        }
        else if (State::PREAMBLE_LEN_2 == state)
        {
            sectionLen += input[i];

            state = State::PREAMBLE_ADDR_1; 
        }
        else if (State::PREAMBLE_ADDR_1 == state)
        {
            beginAddr = input[i];
            beginAddr <<= 8;

            state = State::PREAMBLE_ADDR_2;
        }
        else if (State::PREAMBLE_ADDR_2 == state)
        {
            beginAddr += input[i];

            dataCount = 0;
            state = State::DATA;

            ++parsedSections;

            std::cout << "Section: " << parsedSections << std::endl;
            std::cout << "Address: 0x" << std::hex << beginAddr << std::dec << " (" << beginAddr << ")" << std::endl;
            std::cout << "Length: " << sectionLen << " bytes" << std::endl;
            std::cout << "------------------------" << std::endl;

        }
        else if (State::DATA == state)
        {
            if (0 == dataCount)
            {
                size_t lastindex = inputFile.find_last_of(".");

                std::string rawname = inputFile;
                if (lastindex != std::string::npos)
                    rawname = inputFile.substr(0, lastindex);

                std::stringstream ss; 
                ss << rawname << "_" << std::hex << std::setfill('0') << std::setw(4) << beginAddr << ".bin";

                ofile.open(ss.str(), std::ios::binary);
                if (!ofile.is_open())
                {
                    std::cerr << "Could not open output file " << ss.str() << ". Parsing aborted." << std::endl;
                    return 1;
                }
            }

            ofile.put(input[i]);
            ++dataCount;

            if (dataCount >= sectionLen)
            {
                ofile.close();
                state = State::PREAMBLE_OR_POSTAMBLE_MAGIC_NUMBER;
            }
        }
        else if (State::PREAMBLE_OR_POSTAMBLE_MAGIC_NUMBER == state)
        {
            if (0 == input[i])
            {
                state = State::PREAMBLE_LEN_1;
            }
            else if (0xFF == input[i])
            {
                state = State::POSTAMBLE_ZERO_1;
            }
            else
            {
                std::cerr << "Preamble/postamble magic number not found. Parsing aborted." << std::endl;
                return 1;
            }            
        }
        else if (State::POSTAMBLE_ZERO_1 == state)
        {
            if (input[i] != 0x00)
                std::cout << "Warning! Postable zero 1 is not 0." << std::endl;

            state = State::POSTAMBLE_ZERO_2;
        }
        else if (State::POSTAMBLE_ZERO_2 == state)
        {
            if (input[i] != 0x00)
                std::cout << "Warning! Postable zero 2 is not 0." << std::endl;
                
            state = State::POSTAMBLE_EXEC_ADDR_1;
        }
        else if (State::POSTAMBLE_EXEC_ADDR_1 == state)
        {
            execAddr = input[i];
            execAddr <<= 8;

            state = State::POSTAMBLE_EXEC_ADDR_2;

        }
        else if (State::POSTAMBLE_EXEC_ADDR_2 == state)
        {
            execAddr += input[i];
            state = State::END;
        }
        else
        {
            std::cerr << "Invalid parser state." << std::endl;
            return 1;
        }
        
    }

    if (state != State::END)
    {
        std::cerr << "Invalid input file." << std::endl;
        return 1;
    }

    std::cout << "Execution address: " << std::hex << execAddr << std::dec << " (" << execAddr << ")" << std::endl;
            
    std::cout << "Total sections: " << parsedSections << std::endl;

  // object literal notation to create your structures
  sections.push({ startAddress: 'abc', dissamblyString: 'LDA $F991', instruction: '', comment: '' });
}; 

