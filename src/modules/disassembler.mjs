const AddressingMode = Object.freeze({
  none:"none",
  immediate:"immediate",
  direct:"direct",
  indexed:"indexed",
  extended:"extended",
  inherent:"inherent",
  relative:"relative",
  register:"register"
})

const Register = Object.freeze({
  0x00:"X",
  0x01:"Y",
  0x02:"U",
  0x03:"S"
})

const Opcodes = Object.freeze({
  0x3A: { mnemonic: "ABX", length: 1, addressingMode: AddressingMode.inherent, format: `ABX` },
  0x89: { mnemonic: "ADCA", length: 2, addressingMode: AddressingMode.immediate, format: `ADCA &emsp; #` },
  0x99: { mnemonic: "ADCA", length: 2, addressingMode: AddressingMode.direct, format: `ADCA &emsp; ` },
  0xA9: { mnemonic: "ADCA", length: 2, addressingMode: AddressingMode.indexed, format: `ADCA &emsp; ` },
  0xB9: { mnemonic: "ADCA", length: 3, addressingMode: AddressingMode.extended, format: `ADCA &emsp; ` },
  0xC9: { mnemonic: "ADCB", length: 2, addressingMode: AddressingMode.immediate, format: `ADCB &emsp; #` },
  0xD9: { mnemonic: "ADCB", length: 2, addressingMode: AddressingMode.direct, format: `ADCB &emsp; ` },
  0xE9: { mnemonic: "ADCB", length: 2, addressingMode: AddressingMode.indexed, format: `ADCB &emsp; ` },
  0xF9: { mnemonic: "ADCB", length: 3, addressingMode: AddressingMode.extended, format: `ADCB &emsp; ` },
  0x8B: { mnemonic: "ADDA", length: 2, addressingMode: AddressingMode.immediate, format: `ADDA &emsp; #` },
  0x9B: { mnemonic: "ADDA", length: 2, addressingMode: AddressingMode.direct, format: `ADDA &emsp; ` },
  0xAB: { mnemonic: "ADDA", length: 2, addressingMode: AddressingMode.indexed, format: `ADDA &emsp; ` },
  0xBB: { mnemonic: "ADDA", length: 3, addressingMode: AddressingMode.extended, format: `ADDA &emsp; ` },
  0xCB: { mnemonic: "ADDB", length: 2, addressingMode: AddressingMode.immediate, format: `ADDB &emsp; #` },
  0xDB: { mnemonic: "ADDB", length: 2, addressingMode: AddressingMode.direct, format: `ADDB &emsp; ` },
  0xEB: { mnemonic: "ADDB", length: 2, addressingMode: AddressingMode.indexed, format: `ADDB &emsp; ` },
  0xFB: { mnemonic: "ADDB", length: 3, addressingMode: AddressingMode.extended, format: `ADDB &emsp; ` },
  0xC3: { mnemonic: "ADDD", length: 3, addressingMode: AddressingMode.immediate, format: `ADDD &emsp; #` },
  0xD3: { mnemonic: "ADDD", length: 2, addressingMode: AddressingMode.direct, format: `ADDD &emsp; ` },
  0xE3: { mnemonic: "ADDD", length: 2, addressingMode: AddressingMode.indexed, format: `ADDD &emsp; ` },
  0xF3: { mnemonic: "ADDD", length: 3, addressingMode: AddressingMode.extended, format: `ADDD &emsp; ` },
  0x84: { mnemonic: "ANDA", length: 2, addressingMode: AddressingMode.immediate, format: `ANDA &emsp; #` },
  0x94: { mnemonic: "ANDA", length: 2, addressingMode: AddressingMode.direct, format: `ANDA &emsp; ` },
  0xA4: { mnemonic: "ANDA", length: 2, addressingMode: AddressingMode.indexed, format: `ANDA &emsp; ` },
  0xB4: { mnemonic: "ANDA", length: 3, addressingMode: AddressingMode.extended, format: `ANDA &emsp; ` },
  0xC4: { mnemonic: "ANDB", length: 2, addressingMode: AddressingMode.immediate, format: `ANDB &emsp; #` },
  0xD4: { mnemonic: "ANDB", length: 2, addressingMode: AddressingMode.direct, format: `ANDB &emsp; ` },
  0xE4: { mnemonic: "ANDB", length: 2, addressingMode: AddressingMode.indexed, format: `ANDB &emsp; ` },
  0xF4: { mnemonic: "ANDB", length: 3, addressingMode: AddressingMode.extended, format: `ANDB &emsp; ` },
  0x1C: { mnemonic: "ANDCC", length: 2, addressingMode: AddressingMode.immediate, format: `ANDCC &emsp; #` },
  0x08: { mnemonic: "ASL/LSL", length: 2, addressingMode: AddressingMode.direct, format: `ASL/LSL &emsp; ` },
  0x68: { mnemonic: "ASL/LSL", length: 2, addressingMode: AddressingMode.indexed, format: `ASL/LSL &emsp; ` },
  0x78: { mnemonic: "ASL/LSL", length: 3, addressingMode: AddressingMode.extended, format: `ASL/LSL &emsp; ` },
  0x48: { mnemonic: "ASLA/LSLA", length: 1, addressingMode: AddressingMode.inherent, format: `ASLA/LSLA` },
  0x58: { mnemonic: "ASLB/LSLB", length: 1, addressingMode: AddressingMode.inherent, format: `ASLB/LSLB` },
  0x07: { mnemonic: "ASR", length: 2, addressingMode: AddressingMode.direct, format: `ASR &emsp; ` },
  0x67: { mnemonic: "ASR", length: 2, addressingMode: AddressingMode.indexed, format: `ASR &emsp; ` },
  0x77: { mnemonic: "ASR", length: 3, addressingMode: AddressingMode.extended, format: `ASR &emsp; ` },
  0x47: { mnemonic: "ASRA", length: 1, addressingMode: AddressingMode.inherent, format: `ASRA` },
  0x57: { mnemonic: "ASRB", length: 1, addressingMode: AddressingMode.inherent, format: `ASRB` },
  0x27: { mnemonic: "BEQ", length: 2, addressingMode: AddressingMode.relative, format: `BEQ &emsp; ` },
  0x2C: { mnemonic: "BGE", length: 2, addressingMode: AddressingMode.relative, format: `BGE &emsp; ` },
  0x2E: { mnemonic: "BGT", length: 2, addressingMode: AddressingMode.relative, format: `BGT &emsp; ` },
  0x22: { mnemonic: "BHI", length: 2, addressingMode: AddressingMode.relative, format: `BHI &emsp; ` },
  0x24: { mnemonic: "BHS/BCC", length: 2, addressingMode: AddressingMode.relative, format: `BHS/BCC &emsp; ` },
  0x85: { mnemonic: "BITA", length: 2, addressingMode: AddressingMode.immediate, format: `BITA &emsp; #` },
  0x95: { mnemonic: "BITA", length: 2, addressingMode: AddressingMode.direct, format: `BITA &emsp; ` },
  0xA5: { mnemonic: "BITA", length: 2, addressingMode: AddressingMode.indexed, format: `BITA &emsp; ` },
  0xB5: { mnemonic: "BITA", length: 3, addressingMode: AddressingMode.extended, format: `BITA &emsp; ` },
  0xC5: { mnemonic: "BITB", length: 2, addressingMode: AddressingMode.immediate, format: `BITB &emsp; #` },
  0xD5: { mnemonic: "BITB", length: 2, addressingMode: AddressingMode.direct, format: `BITB &emsp; ` },
  0xE5: { mnemonic: "BITB", length: 2, addressingMode: AddressingMode.indexed, format: `BITB &emsp; ` },
  0xF5: { mnemonic: "BITB", length: 3, addressingMode: AddressingMode.extended, format: `BITB &emsp; ` },
  0x2F: { mnemonic: "BLE", length: 2, addressingMode: AddressingMode.relative, format: `BLE &emsp; ` },
  0x25: { mnemonic: "BLO/BCS", length: 2, addressingMode: AddressingMode.relative, format: `BLO/BCS &emsp; ` },
  0x23: { mnemonic: "BLS", length: 2, addressingMode: AddressingMode.relative, format: `BLS &emsp; ` },
  0x2D: { mnemonic: "BLT", length: 2, addressingMode: AddressingMode.relative, format: `BLT &emsp; ` },
  0x2B: { mnemonic: "BMI", length: 2, addressingMode: AddressingMode.relative, format: `BMI &emsp; ` },
  0x26: { mnemonic: "BNE", length: 2, addressingMode: AddressingMode.relative, format: `BNE &emsp; ` },
  0x2A: { mnemonic: "BPL", length: 2, addressingMode: AddressingMode.relative, format: `BPL &emsp; ` },
  0x20: { mnemonic: "BRA", length: 2, addressingMode: AddressingMode.relative, format: `BRA &emsp; ` },
  0x21: { mnemonic: "BRN", length: 2, addressingMode: AddressingMode.relative, format: `BRN &emsp; ` },
  0x8D: { mnemonic: "BSR", length: 2, addressingMode: AddressingMode.relative, format: `BSR &emsp; ` },
  0x28: { mnemonic: "BVC", length: 2, addressingMode: AddressingMode.relative, format: `BVC &emsp; ` },
  0x29: { mnemonic: "BVS", length: 2, addressingMode: AddressingMode.relative, format: `BVS &emsp; ` },
  0x0F: { mnemonic: "CLR", length: 2, addressingMode: AddressingMode.direct, format: `CLR &emsp; ` },
  0x6F: { mnemonic: "CLR", length: 2, addressingMode: AddressingMode.indexed, format: `CLR &emsp; ` },
  0x7F: { mnemonic: "CLR", length: 3, addressingMode: AddressingMode.extended, format: `CLR &emsp; ` },
  0x4F: { mnemonic: "CLRA", length: 1, addressingMode: AddressingMode.inherent, format: `CLRA` },
  0x5F: { mnemonic: "CLRB", length: 1, addressingMode: AddressingMode.inherent, format: `CLRB` },
  0x81: { mnemonic: "CMPA", length: 2, addressingMode: AddressingMode.immediate, format: `CMPA &emsp; #` },
  0x91: { mnemonic: "CMPA", length: 2, addressingMode: AddressingMode.direct, format: `CMPA &emsp; ` },
  0xA1: { mnemonic: "CMPA", length: 2, addressingMode: AddressingMode.indexed, format: `CMPA &emsp; ` },
  0xB1: { mnemonic: "CMPA", length: 3, addressingMode: AddressingMode.extended, format: `CMPA &emsp; ` },
  0xC1: { mnemonic: "CMPB", length: 2, addressingMode: AddressingMode.immediate, format: `CMPB &emsp; #` },
  0xD1: { mnemonic: "CMPB", length: 2, addressingMode: AddressingMode.direct, format: `CMPB &emsp; ` },
  0xE1: { mnemonic: "CMPB", length: 2, addressingMode: AddressingMode.indexed, format: `CMPB &emsp; ` },
  0xF1: { mnemonic: "CMPB", length: 3, addressingMode: AddressingMode.extended, format: `CMPB &emsp; ` },
  0x1083: { mnemonic: "CMPD", length: 4, addressingMode: AddressingMode.immediate, format: `CMPD &emsp; #` },
  0x1093: { mnemonic: "CMPD", length: 3, addressingMode: AddressingMode.direct, format: `CMPD &emsp; ` },
  0x10A3: { mnemonic: "CMPD", length: 3, addressingMode: AddressingMode.indexed, format: `CMPD &emsp; ` },
  0x10B3: { mnemonic: "CMPD", length: 4, addressingMode: AddressingMode.extended, format: `CMPD &emsp; ` },
  0x118C: { mnemonic: "CMPS", length: 4, addressingMode: AddressingMode.immediate, format: `CMPS &emsp; #` },
  0x119C: { mnemonic: "CMPS", length: 3, addressingMode: AddressingMode.direct, format: `CMPS &emsp; ` },
  0x11AC: { mnemonic: "CMPS", length: 3, addressingMode: AddressingMode.indexed, format: `CMPS &emsp; ` },
  0x11BC: { mnemonic: "CMPS", length: 4, addressingMode: AddressingMode.extended, format: `CMPS &emsp; ` },
  0x1183: { mnemonic: "CMPU", length: 4, addressingMode: AddressingMode.immediate, format: `CMPU &emsp; #` },
  0x1193: { mnemonic: "CMPU", length: 3, addressingMode: AddressingMode.direct, format: `CMPU &emsp; ` },
  0x11A3: { mnemonic: "CMPU", length: 3, addressingMode: AddressingMode.indexed, format: `CMPU &emsp; ` },
  0x11B3: { mnemonic: "CMPU", length: 4, addressingMode: AddressingMode.extended, format: `CMPU &emsp; ` },
  0x8C: { mnemonic: "CMPX", length: 3, addressingMode: AddressingMode.immediate, format: `CMPX &emsp; #` },
  0x9C: { mnemonic: "CMPX", length: 2, addressingMode: AddressingMode.direct, format: `CMPX &emsp; ` },
  0xAC: { mnemonic: "CMPX", length: 2, addressingMode: AddressingMode.indexed, format: `CMPX &emsp; ` },
  0xBC: { mnemonic: "CMPX", length: 3, addressingMode: AddressingMode.extended, format: `CMPX &emsp; ` },
  0x108C: { mnemonic: "CMPY", length: 4, addressingMode: AddressingMode.immediate, format: `CMPY &emsp; #` },
  0x109C: { mnemonic: "CMPY", length: 3, addressingMode: AddressingMode.direct, format: `CMPY &emsp; ` },
  0x10AC: { mnemonic: "CMPY", length: 3, addressingMode: AddressingMode.indexed, format: `CMPY &emsp; ` },
  0x10BC: { mnemonic: "CMPY", length: 4, addressingMode: AddressingMode.extended, format: `CMPY &emsp; ` },
  0x03: { mnemonic: "COM", length: 2, addressingMode: AddressingMode.direct, format: `COM &emsp; ` },
  0x63: { mnemonic: "COM", length: 2, addressingMode: AddressingMode.indexed, format: `COM &emsp; ` },
  0x73: { mnemonic: "COM", length: 3, addressingMode: AddressingMode.extended, format: `COM &emsp; ` },
  0x43: { mnemonic: "COMA", length: 1, addressingMode: AddressingMode.inherent, format: `COMA` },
  0x53: { mnemonic: "COMB", length: 1, addressingMode: AddressingMode.inherent, format: `COMB` },
  0x3C: { mnemonic: "CWAI", length: 2, addressingMode: AddressingMode.immediate, format: `CWAI &emsp; #` },
  0x19: { mnemonic: "DAA", length: 1, addressingMode: AddressingMode.inherent, format: `DAA` },
  0x0A: { mnemonic: "DEC", length: 2, addressingMode: AddressingMode.direct, format: `DEC &emsp; ` },
  0x6A: { mnemonic: "DEC", length: 2, addressingMode: AddressingMode.indexed, format: `DEC &emsp; ` },
  0x7A: { mnemonic: "DEC", length: 3, addressingMode: AddressingMode.extended, format: `DEC &emsp; ` },
  0x4A: { mnemonic: "DECA", length: 1, addressingMode: AddressingMode.inherent, format: `DECA` },
  0x5A: { mnemonic: "DECB", length: 1, addressingMode: AddressingMode.inherent, format: `DECB` },
  0x88: { mnemonic: "EORA", length: 2, addressingMode: AddressingMode.immediate, format: `EORA &emsp; #` },
  0x98: { mnemonic: "EORA", length: 2, addressingMode: AddressingMode.direct, format: `EORA &emsp; ` },
  0xA8: { mnemonic: "EORA", length: 2, addressingMode: AddressingMode.indexed, format: `EORA &emsp; ` },
  0xB8: { mnemonic: "EORA", length: 3, addressingMode: AddressingMode.extended, format: `EORA &emsp; ` },
  0xC8: { mnemonic: "EORB", length: 2, addressingMode: AddressingMode.immediate, format: `EORB &emsp; #` },
  0xD8: { mnemonic: "EORB", length: 2, addressingMode: AddressingMode.direct, format: `EORB &emsp; ` },
  0xE8: { mnemonic: "EORB", length: 2, addressingMode: AddressingMode.indexed, format: `EORB &emsp; ` },
  0xF8: { mnemonic: "EORB", length: 3, addressingMode: AddressingMode.extended, format: `EORB &emsp; ` },
  0x1E: { mnemonic: "EXG", length: 2, addressingMode: AddressingMode.immediate, format: `EXG &emsp; #` },
  0x0C: { mnemonic: "INC", length: 2, addressingMode: AddressingMode.direct, format: `INC &emsp; ` },
  0x6C: { mnemonic: "INC", length: 2, addressingMode: AddressingMode.indexed, format: `INC &emsp; ` },
  0x7C: { mnemonic: "INC", length: 3, addressingMode: AddressingMode.extended, format: `INC &emsp; ` },
  0x4C: { mnemonic: "INCA", length: 1, addressingMode: AddressingMode.inherent, format: `INCA` },
  0x5C: { mnemonic: "INCB", length: 1, addressingMode: AddressingMode.inherent, format: `INCB` },
  0x0E: { mnemonic: "JMP", length: 2, addressingMode: AddressingMode.direct, format: `JMP &emsp; ` },
  0x6E: { mnemonic: "JMP", length: 2, addressingMode: AddressingMode.indexed, format: `JMP &emsp; ` },
  0x7E: { mnemonic: "JMP", length: 3, addressingMode: AddressingMode.extended, format: `JMP &emsp; ` },
  0x9D: { mnemonic: "JSR", length: 2, addressingMode: AddressingMode.direct, format: `JSR &emsp; ` },
  0xAD: { mnemonic: "JSR", length: 2, addressingMode: AddressingMode.indexed, format: `JSR &emsp; ` },
  0xBD: { mnemonic: "JSR", length: 3, addressingMode: AddressingMode.extended, format: `JSR &emsp; ` },
  0x1025: { mnemonic: "LBCS/LBLO", length: 4, addressingMode: AddressingMode.relative, format: `LBCS/LBLO &emsp; ` },
  0x1027: { mnemonic: "LBEQ", length: 4, addressingMode: AddressingMode.relative, format: `LBEQ &emsp; ` },
  0x102C: { mnemonic: "LBGE", length: 4, addressingMode: AddressingMode.relative, format: `LBGE &emsp; ` },
  0x102E: { mnemonic: "LBGT", length: 4, addressingMode: AddressingMode.relative, format: `LBGT &emsp; ` },
  0x1022: { mnemonic: "LBHI", length: 4, addressingMode: AddressingMode.relative, format: `LBHI &emsp; ` },
  0x1024: { mnemonic: "LBHS/LBCC", length: 4, addressingMode: AddressingMode.relative, format: `LBHS/LBCC &emsp; ` },
  0x102F: { mnemonic: "LBLE", length: 4, addressingMode: AddressingMode.relative, format: `LBLE &emsp; ` },
  0x1023: { mnemonic: "LBLS", length: 4, addressingMode: AddressingMode.relative, format: `LBLS &emsp; ` },
  0x102D: { mnemonic: "LBLT", length: 4, addressingMode: AddressingMode.relative, format: `LBLT &emsp; ` },
  0x102B: { mnemonic: "LBMI", length: 4, addressingMode: AddressingMode.relative, format: `LBMI &emsp; ` },
  0x1026: { mnemonic: "LBNE", length: 4, addressingMode: AddressingMode.relative, format: `LBNE &emsp; ` },
  0x102A: { mnemonic: "LBPL", length: 4, addressingMode: AddressingMode.relative, format: `LBPL &emsp; ` },
  0x16: { mnemonic: "LBRA", length: 3, addressingMode: AddressingMode.relative, format: `LBRA &emsp; ` },
  0x1021: { mnemonic: "LBRN", length: 4, addressingMode: AddressingMode.relative, format: `LBRN &emsp; ` },
  0x17: { mnemonic: "LBSR", length: 3, addressingMode: AddressingMode.relative, format: `LBSR &emsp; ` },
  0x1028: { mnemonic: "LBVC", length: 4, addressingMode: AddressingMode.relative, format: `LBVC &emsp; ` },
  0x1029: { mnemonic: "LBVS", length: 4, addressingMode: AddressingMode.relative, format: `LBVS &emsp; ` },
  0x86: { mnemonic: "LDA", length: 2, addressingMode: AddressingMode.immediate, format: `LDA &emsp; #` },
  0x96: { mnemonic: "LDA", length: 2, addressingMode: AddressingMode.direct, format: `LDA &emsp; ` },
  0xA6: { mnemonic: "LDA", length: 2, addressingMode: AddressingMode.indexed, format: `LDA &emsp; ` },
  0xB6: { mnemonic: "LDA", length: 3, addressingMode: AddressingMode.extended, format: `LDA &emsp; ` },
  0xC6: { mnemonic: "LDB", length: 2, addressingMode: AddressingMode.immediate, format: `LDB &emsp; #` },
  0xD6: { mnemonic: "LDB", length: 2, addressingMode: AddressingMode.direct, format: `LDB &emsp; ` },
  0xE6: { mnemonic: "LDB", length: 2, addressingMode: AddressingMode.indexed, format: `LDB &emsp; ` },
  0xF6: { mnemonic: "LDB", length: 3, addressingMode: AddressingMode.extended, format: `LDB &emsp; ` },
  0xCC: { mnemonic: "LDD", length: 3, addressingMode: AddressingMode.immediate, format: `LDD &emsp; #` },
  0xDC: { mnemonic: "LDD", length: 2, addressingMode: AddressingMode.direct, format: `LDD &emsp; ` },
  0xEC: { mnemonic: "LDD", length: 2, addressingMode: AddressingMode.indexed, format: `LDD &emsp; ` },
  0xFC: { mnemonic: "LDD", length: 3, addressingMode: AddressingMode.extended, format: `LDD &emsp; ` },
  0x10CE: { mnemonic: "LDS", length: 4, addressingMode: AddressingMode.immediate, format: `LDS &emsp; #` },
  0x10DE: { mnemonic: "LDS", length: 3, addressingMode: AddressingMode.direct, format: `LDS &emsp; ` },
  0x10EE: { mnemonic: "LDS", length: 3, addressingMode: AddressingMode.indexed, format: `LDS &emsp; ` },
  0x10FE: { mnemonic: "LDS", length: 4, addressingMode: AddressingMode.extended, format: `LDS &emsp; ` },
  0xCE: { mnemonic: "LDU", length: 3, addressingMode: AddressingMode.immediate, format: `LDU &emsp; #` },
  0xDE: { mnemonic: "LDU", length: 2, addressingMode: AddressingMode.direct, format: `LDU &emsp; ` },
  0xEE: { mnemonic: "LDU", length: 2, addressingMode: AddressingMode.indexed, format: `LDU &emsp; ` },
  0xFE: { mnemonic: "LDU", length: 3, addressingMode: AddressingMode.extended, format: `LDU &emsp; ` },
  0x8E: { mnemonic: "LDX", length: 3, addressingMode: AddressingMode.immediate, format: `LDX &emsp; #` },
  0x9E: { mnemonic: "LDX", length: 2, addressingMode: AddressingMode.direct, format: `LDX &emsp; ` },
  0xAE: { mnemonic: "LDX", length: 2, addressingMode: AddressingMode.indexed, format: `LDX &emsp; ` },
  0xBE: { mnemonic: "LDX", length: 3, addressingMode: AddressingMode.extended, format: `LDX &emsp; ` },
  0x108E: { mnemonic: "LDY", length: 4, addressingMode: AddressingMode.immediate, format: `LDY &emsp; #` },
  0x109E: { mnemonic: "LDY", length: 3, addressingMode: AddressingMode.direct, format: `LDY &emsp; ` },
  0x10AE: { mnemonic: "LDY", length: 3, addressingMode: AddressingMode.indexed, format: `LDY &emsp; ` },
  0x10BE: { mnemonic: "LDY", length: 4, addressingMode: AddressingMode.extended, format: `LDY &emsp; ` },
  0x32: { mnemonic: "LEAS", length: 2, addressingMode: AddressingMode.indexed, format: `LEAS &emsp; ` },
  0x33: { mnemonic: "LEAU", length: 2, addressingMode: AddressingMode.indexed, format: `LEAU &emsp; ` },
  0x30: { mnemonic: "LEAX", length: 2, addressingMode: AddressingMode.indexed, format: `LEAX &emsp; ` },
  0x31: { mnemonic: "LEAY", length: 2, addressingMode: AddressingMode.indexed, format: `LEAY &emsp; ` },
  0x04: { mnemonic: "LSR", length: 2, addressingMode: AddressingMode.direct, format: `LSR &emsp; ` },
  0x64: { mnemonic: "LSR", length: 2, addressingMode: AddressingMode.indexed, format: `LSR &emsp; ` },
  0x74: { mnemonic: "LSR", length: 3, addressingMode: AddressingMode.extended, format: `LSR &emsp; ` },
  0x44: { mnemonic: "LSRA", length: 1, addressingMode: AddressingMode.inherent, format: `LSRA` },
  0x54: { mnemonic: "LSRB", length: 1, addressingMode: AddressingMode.inherent, format: `LSRB` },
  0x3D: { mnemonic: "MUL", length: 1, addressingMode: AddressingMode.inherent, format: `MUL` },
  0x00: { mnemonic: "NEG", length: 2, addressingMode: AddressingMode.direct, format: `NEG &emsp; ` },
  0x60: { mnemonic: "NEG", length: 2, addressingMode: AddressingMode.indexed, format: `NEG &emsp; ` },
  0x70: { mnemonic: "NEG", length: 3, addressingMode: AddressingMode.extended, format: `NEG &emsp; ` },
  0x40: { mnemonic: "NEGA", length: 1, addressingMode: AddressingMode.inherent, format: `NEGA` },
  0x50: { mnemonic: "NEGB", length: 1, addressingMode: AddressingMode.inherent, format: `NEGB` },
  0x12: { mnemonic: "NOP", length: 1, addressingMode: AddressingMode.inherent, format: `NOP` },
  0x8A: { mnemonic: "ORA", length: 2, addressingMode: AddressingMode.immediate, format: `ORA &emsp; #` },
  0x9A: { mnemonic: "ORA", length: 2, addressingMode: AddressingMode.direct, format: `ORA &emsp; ` },
  0xAA: { mnemonic: "ORA", length: 2, addressingMode: AddressingMode.indexed, format: `ORA &emsp; ` },
  0xBA: { mnemonic: "ORA", length: 3, addressingMode: AddressingMode.extended, format: `ORA &emsp; ` },
  0xCA: { mnemonic: "ORB", length: 2, addressingMode: AddressingMode.immediate, format: `ORB &emsp; #` },
  0xDA: { mnemonic: "ORB", length: 2, addressingMode: AddressingMode.direct, format: `ORB &emsp; ` },
  0xEA: { mnemonic: "ORB", length: 2, addressingMode: AddressingMode.indexed, format: `ORB &emsp; ` },
  0xFA: { mnemonic: "ORB", length: 3, addressingMode: AddressingMode.extended, format: `ORB &emsp; ` },
  0x1A: { mnemonic: "ORCC", length: 2, addressingMode: AddressingMode.immediate, format: `ORCC &emsp; #` },
  0x34: { mnemonic: "PSHS", length: 2, addressingMode: AddressingMode.immediate, format: `PSHS &emsp; #` },
  0x36: { mnemonic: "PSHU", length: 2, addressingMode: AddressingMode.immediate, format: `PSHU &emsp; #` },
  0x35: { mnemonic: "PULS", length: 2, addressingMode: AddressingMode.immediate, format: `PULS &emsp; #` },
  0x37: { mnemonic: "PULU", length: 2, addressingMode: AddressingMode.immediate, format: `PULU &emsp; #` },
  0x09: { mnemonic: "ROL", length: 2, addressingMode: AddressingMode.direct, format: `ROL &emsp; ` },
  0x69: { mnemonic: "ROL", length: 2, addressingMode: AddressingMode.indexed, format: `ROL &emsp; ` },
  0x79: { mnemonic: "ROL", length: 3, addressingMode: AddressingMode.extended, format: `ROL &emsp; ` },
  0x49: { mnemonic: "ROLA", length: 1, addressingMode: AddressingMode.inherent, format: `ROLA` },
  0x59: { mnemonic: "ROLB", length: 1, addressingMode: AddressingMode.inherent, format: `ROLB` },
  0x06: { mnemonic: "ROR", length: 2, addressingMode: AddressingMode.direct, format: `ROR &emsp; ` },
  0x66: { mnemonic: "ROR", length: 2, addressingMode: AddressingMode.indexed, format: `ROR &emsp; ` },
  0x76: { mnemonic: "ROR", length: 3, addressingMode: AddressingMode.extended, format: `ROR &emsp; ` },
  0x46: { mnemonic: "RORA", length: 1, addressingMode: AddressingMode.inherent, format: `RORA` },
  0x56: { mnemonic: "RORB", length: 1, addressingMode: AddressingMode.inherent, format: `RORB` },
  0x3B: { mnemonic: "RTI", length: 1, addressingMode: AddressingMode.inherent, format: `RTI` },
  0x39: { mnemonic: "RTS", length: 1, addressingMode: AddressingMode.inherent, format: `RTS` },
  0x82: { mnemonic: "SBCA", length: 2, addressingMode: AddressingMode.immediate, format: `SBCA &emsp; #` },
  0x92: { mnemonic: "SBCA", length: 2, addressingMode: AddressingMode.direct, format: `SBCA &emsp; ` },
  0xA2: { mnemonic: "SBCA", length: 2, addressingMode: AddressingMode.indexed, format: `SBCA &emsp; ` },
  0xB2: { mnemonic: "SBCA", length: 3, addressingMode: AddressingMode.extended, format: `SBCA &emsp; ` },
  0xC2: { mnemonic: "SBCB", length: 2, addressingMode: AddressingMode.immediate, format: `SBCB &emsp; #` },
  0xD2: { mnemonic: "SBCB", length: 2, addressingMode: AddressingMode.direct, format: `SBCB &emsp; ` },
  0xE2: { mnemonic: "SBCB", length: 2, addressingMode: AddressingMode.indexed, format: `SBCB &emsp; ` },
  0xF2: { mnemonic: "SBCB", length: 3, addressingMode: AddressingMode.extended, format: `SBCB &emsp; ` },
  0x1D: { mnemonic: "SEX", length: 1, addressingMode: AddressingMode.inherent, format: `SEX` },
  0x97: { mnemonic: "STA", length: 2, addressingMode: AddressingMode.direct, format: `STA &emsp; ` },
  0xA7: { mnemonic: "STA", length: 2, addressingMode: AddressingMode.indexed, format: `STA &emsp; ` },
  0xB7: { mnemonic: "STA", length: 3, addressingMode: AddressingMode.extended, format: `STA &emsp; ` },
  0xD7: { mnemonic: "STB", length: 2, addressingMode: AddressingMode.direct, format: `STB &emsp; ` },
  0xE7: { mnemonic: "STB", length: 2, addressingMode: AddressingMode.indexed, format: `STB &emsp; ` },
  0xF7: { mnemonic: "STB", length: 3, addressingMode: AddressingMode.extended, format: `STB &emsp; ` },
  0xDD: { mnemonic: "STD", length: 2, addressingMode: AddressingMode.direct, format: `STD &emsp; ` },
  0xED: { mnemonic: "STD", length: 2, addressingMode: AddressingMode.indexed, format: `STD &emsp; ` },
  0xFD: { mnemonic: "STD", length: 3, addressingMode: AddressingMode.extended, format: `STD &emsp; ` },
  0x10DF: { mnemonic: "STS", length: 3, addressingMode: AddressingMode.direct, format: `STS &emsp; ` },
  0x10EF: { mnemonic: "STS", length: 3, addressingMode: AddressingMode.indexed, format: `STS &emsp; ` },
  0x10FF: { mnemonic: "STS", length: 4, addressingMode: AddressingMode.extended, format: `STS &emsp; ` },
  0xDF: { mnemonic: "STU", length: 2, addressingMode: AddressingMode.direct, format: `STU &emsp; ` },
  0xEF: { mnemonic: "STU", length: 2, addressingMode: AddressingMode.indexed, format: `STU &emsp; ` },
  0xFF: { mnemonic: "STU", length: 3, addressingMode: AddressingMode.extended, format: `STU &emsp; ` },
  0x9F: { mnemonic: "STX", length: 2, addressingMode: AddressingMode.direct, format: `STX &emsp; ` },
  0xAF: { mnemonic: "STX", length: 2, addressingMode: AddressingMode.indexed, format: `STX &emsp; ` },
  0xBF: { mnemonic: "STX", length: 3, addressingMode: AddressingMode.extended, format: `STX &emsp; ` },
  0x109F: { mnemonic: "STY", length: 3, addressingMode: AddressingMode.direct, format: `STY &emsp; ` },
  0x10AF: { mnemonic: "STY", length: 3, addressingMode: AddressingMode.indexed, format: `STY &emsp; ` },
  0x10BF: { mnemonic: "STY", length: 4, addressingMode: AddressingMode.extended, format: `STY &emsp; ` },
  0x80: { mnemonic: "SUBA", length: 2, addressingMode: AddressingMode.immediate, format: `SUBA &emsp; #` },
  0x90: { mnemonic: "SUBA", length: 2, addressingMode: AddressingMode.direct, format: `SUBA &emsp; ` },
  0xA0: { mnemonic: "SUBA", length: 2, addressingMode: AddressingMode.indexed, format: `SUBA &emsp; ` },
  0xB0: { mnemonic: "SUBA", length: 3, addressingMode: AddressingMode.extended, format: `SUBA &emsp; ` },
  0xC0: { mnemonic: "SUBB", length: 2, addressingMode: AddressingMode.immediate, format: `SUBB &emsp; #` },
  0xD0: { mnemonic: "SUBB", length: 2, addressingMode: AddressingMode.direct, format: `SUBB &emsp; ` },
  0xE0: { mnemonic: "SUBB", length: 2, addressingMode: AddressingMode.indexed, format: `SUBB &emsp; ` },
  0xF0: { mnemonic: "SUBB", length: 3, addressingMode: AddressingMode.extended, format: `SUBB &emsp; ` },
  0x83: { mnemonic: "SUBD", length: 3, addressingMode: AddressingMode.immediate, format: `SUBD &emsp; #` },
  0x93: { mnemonic: "SUBD", length: 2, addressingMode: AddressingMode.direct, format: `SUBD &emsp; ` },
  0xA3: { mnemonic: "SUBD", length: 2, addressingMode: AddressingMode.indexed, format: `SUBD &emsp; ` },
  0xB3: { mnemonic: "SUBD", length: 3, addressingMode: AddressingMode.extended, format: `SUBD &emsp; ` },
  0x3F: { mnemonic: "SWI", length: 1, addressingMode: AddressingMode.inherent, format: `SWI` },
  0x103F: { mnemonic: "SWI2", length: 2, addressingMode: AddressingMode.inherent, format: `SWI2` },
  0x13: { mnemonic: "SYNC", length: 1, addressingMode: AddressingMode.inherent, format: `SYNC` },
  0x1F: { mnemonic: "TFR", length: 2, addressingMode: AddressingMode.immediate, format: `TFR &emsp; #` },
  0x0D: { mnemonic: "TST", length: 2, addressingMode: AddressingMode.direct, format: `TST &emsp; ` },
  0x6D: { mnemonic: "TST", length: 2, addressingMode: AddressingMode.indexed, format: `TST &emsp; ` },
  0x7D: { mnemonic: "TST", length: 3, addressingMode: AddressingMode.extended, format: `TST &emsp; ` },
  0x4D: { mnemonic: "TSTA", length: 1, addressingMode: AddressingMode.inherent, format: `TSTA` },
  0x5D: { mnemonic: "TSTB", length: 1, addressingMode: AddressingMode.inherent, format: `TSTB` }
})

/**
 * Decomposes/disassembled a binary buffer into an array of instructions
 *
 * 
 * @param {ArrayBuffer} binaryBuffer uint8 buffer to decompose.
 * @param {int} offset The vitual memory address in which the disassembly starts. 
 * @return {Array} Array of insruction structures.
 * 
 * Fields:
 * succeeded: true if the instruction was correctly decoded.
 * address: the virtual address of the instruction
 * size: the size of the instruction in bytes
 * opcode: integer representing the opcode
 * operands:
 */


function readBigEndian(input, index, length)
{
  let val = 0;
  let result = true;
  while (length > 0 && result) 
  {
    val <<= 8;
    val += input[index];
    
    ++index;
    if (index >= input.byteLength) 
      result = false;
    
    --length;
  }

  return {succeeded: result, value: val};
}

export function disassemble(binaryBuffer, offset)
{
  const input = new Uint8Array(binaryBuffer);

  let instructions = [];
  
  let virtualMemoryAddress = offset;

  let i = 0;
  while (i < input.byteLength) 
  {
    let succeeded = true;
    let initialIndex = i;
    let currentInstructionLength = 1;
    let currentOperandLength = 0;
    let operand = undefined;

  
    let opcode = input[i];
    if (opcode == 0x10 || opcode == 0x11)
    {
      let r = readBigEndian(input, i, 2);
      if (r.succeeded)
      {
        i += 2;
        currentInstructionLength += 2;
        opcode = r.value;
      }
      else
      {
        succeeded = false;
      }
    }

    let instruction = undefined;
    if (succeeded) 
    {
      instruction = Object.assign({}, Opcodes[opcode]);
      if (instruction.mnemonic === undefined)
      {
        succeeded = false;
      }

    }

    if (succeeded)
    {    
      // Read the operand
      let remainingLength = instruction.length - currentInstructionLength; 
      let r = readBigEndian(input, i, remainingLength);
      succeeded = r.succeeded;
      if (succeeded) 
      {
        i += remainingLength;
        currentInstructionLength += remainingLength;
        currentOperandLength += remainingLength;

        operand = r.value;
      }
      
      if (succeeded && instruction.addressingMode === AddressingMode.inherent)
      {
        instruction.format = instruction.mnemonic;
      }
      else if (succeeded && instruction.addressingMode === AddressingMode.immediate)
      {
        instruction.format = instruction.mnemonic + " &emsp; #" + operand.toString(16).padStart(currentOperandLength * 2, '0').toUpperCase();
      }
      else if (succeeded && instruction.addressingMode === AddressingMode.extended) 
      {
        instruction.format = instruction.mnemonic + " &emsp; #" + operand.toString(16).padStart(currentOperandLength * 2, '0').toUpperCase();
      }
      else if (succeeded && instruction.addressingMode === AddressingMode.direct) 
      {
        instruction.format = instruction.mnemonic + " &emsp; <" + operand.toString(16).padStart(currentOperandLength * 2, '0').toUpperCase();
      }
      else if (succeeded && instruction.addressingMode === AddressingMode.indexed) 
      {
        let registerField = (operand & 0x60) >> 5; // 0bxRRxxxxx
        let operandFormat = "";

        let indirect = (operand & 0x10) >> 4;
        let bit7 = (operand & 0x80) >> 7;
        if (bit7 === 1) 
        {
          let addressingMode = operand & 0x0F;

          if (addressingMode === 0x0C || addressingMode === 0x0D || (addressingMode === 0x0F && indirect === 1)) 
          {
            let bytesToRead = 1;
            if (addressingMode !== 0x0C)
              bytesToRead = 2;

            let r = readBigEndian(input, i, bytesToRead);
            succeeded = r.succeeded;
            if (succeeded) 
            {
              i += bytesToRead;
              currentInstructionLength += bytesToRead;
              currentOperandLength += bytesToRead;
              let offset = input[i];
              if (addressingMode === 0x0F && indirect === 1)
              {
                operandFormat = "$" + offset.toString(16).padStart(2, '0').toUpperCase();
              }
              else
              {
                operandFormat = "$" + offset.toString(16).padStart(bytesToRead*2, '0').toUpperCase() + ",PCR";
              }
            }          
          }
          else 
          {
            let register = Register[registerField];
            if (register === undefined)
            {
              instruction.succeeded = false;
            }
        
            if (succeeded && addressingMode === 0x04) // Constant offset address from R
            {
              operandFormat = "," + register;
            }
            //else if (addressingMode === )


            

            }
          }
          
          if (indirect === 1)
          {
            operandFormat = "[" + operandFormat + "]";
          }

        }
        else // bit7 === 0
        {
          if (indirect === 0)
          {
            let register = Register[registerField];
            if (register === undefined)
            {
              succeeded = false;
            }

            if (succeeded)
            {
              // 5 bit offset, direct
              let offset = operand & 0x1F; 
              operandFormat = "$" + offset.toString(16).padStart(2, '0').toUpperCase() + "," + register;
            }
          }
          else // indirect, uses extra byte for offset 
          {
            let r = readBigEndian(input, i, 1);
            succeeded = r.succeeded;
            if (succeeded) 
            {
              ++i;
              ++currentInstructionLength;
              ++currentOperandLength;
              let offset = r.value;
              operandFormat = "[$" + offset.toString(16).padStart(2, '0').toUpperCase() + "," + register + "]";
            }
          } 
        }

        instruction.format = instruction.mnemonic + " &emsp; " + operandFormat;

        
      }
    }


    if (!succeeded)
    {
      i = initialIndex;
      instruction = { mnemonic: "FCB", length: 1, addressingMode: AddressingMode.none };
      instruction.format = "FCB &emsp; $" + input[i].toString(16).padStart(2, '0').toUpperCase();
      currentInstructionLength = 1;
    }

    instruction.rawData = input.slice(initialIndex, i + 1);
    instruction.virtualMemoryAddress = virtualMemoryAddress;
 
    instruction.succeeded = succeeded;

    instructions.push(instruction);

    ++i;

    virtualMemoryAddress += currentInstructionLength;

  }

  return instructions;
}; 