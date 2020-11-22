const AddressingMode = Object.freeze({
  immediate:"immediate",
  direct:"direct",
  indexed:"indexed",
  extended:"extended",
  inherent:"inherent",
  relative:"relative",
  register:"register"
})

const Opcodes = Object.freeze({
  0x3A: { mnemonic: "ABX", length: 1, addressingMode: AddressingMode.inherent, format: `ABX` },
  0x89: { mnemonic: "ADCA", length: 2, addressingMode: AddressingMode.immediate, format: `ADCA     #` },
  0x99: { mnemonic: "ADCA", length: 2, addressingMode: AddressingMode.direct, format: `ADCA     ` },
  0xA9: { mnemonic: "ADCA", length: 2, addressingMode: AddressingMode.indexed, format: `ADCA     ` },
  0xB9: { mnemonic: "ADCA", length: 3, addressingMode: AddressingMode.extended, format: `ADCA     ` },
  0xC9: { mnemonic: "ADCB", length: 2, addressingMode: AddressingMode.immediate, format: `ADCB     #` },
  0xD9: { mnemonic: "ADCB", length: 2, addressingMode: AddressingMode.direct, format: `ADCB     ` },
  0xE9: { mnemonic: "ADCB", length: 2, addressingMode: AddressingMode.indexed, format: `ADCB     ` },
  0xF9: { mnemonic: "ADCB", length: 3, addressingMode: AddressingMode.extended, format: `ADCB     ` },
  0x8B: { mnemonic: "ADDA", length: 2, addressingMode: AddressingMode.immediate, format: `ADDA     #` },
  0x9B: { mnemonic: "ADDA", length: 2, addressingMode: AddressingMode.direct, format: `ADDA     ` },
  0xAB: { mnemonic: "ADDA", length: 2, addressingMode: AddressingMode.indexed, format: `ADDA     ` },
  0xBB: { mnemonic: "ADDA", length: 3, addressingMode: AddressingMode.extended, format: `ADDA     ` },
  0xCB: { mnemonic: "ADDB", length: 2, addressingMode: AddressingMode.immediate, format: `ADDB     #` },
  0xDB: { mnemonic: "ADDB", length: 2, addressingMode: AddressingMode.direct, format: `ADDB     ` },
  0xEB: { mnemonic: "ADDB", length: 2, addressingMode: AddressingMode.indexed, format: `ADDB     ` },
  0xFB: { mnemonic: "ADDB", length: 3, addressingMode: AddressingMode.extended, format: `ADDB     ` },
  0xC3: { mnemonic: "ADDD", length: 3, addressingMode: AddressingMode.immediate, format: `ADDD     #` },
  0xD3: { mnemonic: "ADDD", length: 2, addressingMode: AddressingMode.direct, format: `ADDD     ` },
  0xE3: { mnemonic: "ADDD", length: 2, addressingMode: AddressingMode.indexed, format: `ADDD     ` },
  0xF3: { mnemonic: "ADDD", length: 3, addressingMode: AddressingMode.extended, format: `ADDD     ` },
  0x84: { mnemonic: "ANDA", length: 2, addressingMode: AddressingMode.immediate, format: `ANDA     #` },
  0x94: { mnemonic: "ANDA", length: 2, addressingMode: AddressingMode.direct, format: `ANDA     ` },
  0xA4: { mnemonic: "ANDA", length: 2, addressingMode: AddressingMode.indexed, format: `ANDA     ` },
  0xB4: { mnemonic: "ANDA", length: 3, addressingMode: AddressingMode.extended, format: `ANDA     ` },
  0xC4: { mnemonic: "ANDB", length: 2, addressingMode: AddressingMode.immediate, format: `ANDB     #` },
  0xD4: { mnemonic: "ANDB", length: 2, addressingMode: AddressingMode.direct, format: `ANDB     ` },
  0xE4: { mnemonic: "ANDB", length: 2, addressingMode: AddressingMode.indexed, format: `ANDB     ` },
  0xF4: { mnemonic: "ANDB", length: 3, addressingMode: AddressingMode.extended, format: `ANDB     ` },
  0x1C: { mnemonic: "ANDCC", length: 2, addressingMode: AddressingMode.immediate, format: `ANDCC     #` },
  0x08: { mnemonic: "ASL/LSL", length: 2, addressingMode: AddressingMode.direct, format: `ASL/LSL     ` },
  0x68: { mnemonic: "ASL/LSL", length: 2, addressingMode: AddressingMode.indexed, format: `ASL/LSL     ` },
  0x78: { mnemonic: "ASL/LSL", length: 3, addressingMode: AddressingMode.extended, format: `ASL/LSL     ` },
  0x48: { mnemonic: "ASLA/LSLA", length: 1, addressingMode: AddressingMode.inherent, format: `ASLA/LSLA` },
  0x58: { mnemonic: "ASLB/LSLB", length: 1, addressingMode: AddressingMode.inherent, format: `ASLB/LSLB` },
  0x07: { mnemonic: "ASR", length: 2, addressingMode: AddressingMode.direct, format: `ASR     ` },
  0x67: { mnemonic: "ASR", length: 2, addressingMode: AddressingMode.indexed, format: `ASR     ` },
  0x77: { mnemonic: "ASR", length: 3, addressingMode: AddressingMode.extended, format: `ASR     ` },
  0x47: { mnemonic: "ASRA", length: 1, addressingMode: AddressingMode.inherent, format: `ASRA` },
  0x57: { mnemonic: "ASRB", length: 1, addressingMode: AddressingMode.inherent, format: `ASRB` },
  0x27: { mnemonic: "BEQ", length: 2, addressingMode: AddressingMode.relative, format: `BEQ     ` },
  0x2C: { mnemonic: "BGE", length: 2, addressingMode: AddressingMode.relative, format: `BGE     ` },
  0x2E: { mnemonic: "BGT", length: 2, addressingMode: AddressingMode.relative, format: `BGT     ` },
  0x22: { mnemonic: "BHI", length: 2, addressingMode: AddressingMode.relative, format: `BHI     ` },
  0x24: { mnemonic: "BHS/BCC", length: 2, addressingMode: AddressingMode.relative, format: `BHS/BCC     ` },
  0x85: { mnemonic: "BITA", length: 2, addressingMode: AddressingMode.immediate, format: `BITA     #` },
  0x95: { mnemonic: "BITA", length: 2, addressingMode: AddressingMode.direct, format: `BITA     ` },
  0xA5: { mnemonic: "BITA", length: 2, addressingMode: AddressingMode.indexed, format: `BITA     ` },
  0xB5: { mnemonic: "BITA", length: 3, addressingMode: AddressingMode.extended, format: `BITA     ` },
  0xC5: { mnemonic: "BITB", length: 2, addressingMode: AddressingMode.immediate, format: `BITB     #` },
  0xD5: { mnemonic: "BITB", length: 2, addressingMode: AddressingMode.direct, format: `BITB     ` },
  0xE5: { mnemonic: "BITB", length: 2, addressingMode: AddressingMode.indexed, format: `BITB     ` },
  0xF5: { mnemonic: "BITB", length: 3, addressingMode: AddressingMode.extended, format: `BITB     ` },
  0x2F: { mnemonic: "BLE", length: 2, addressingMode: AddressingMode.relative, format: `BLE     ` },
  0x25: { mnemonic: "BLO/BCS", length: 2, addressingMode: AddressingMode.relative, format: `BLO/BCS     ` },
  0x23: { mnemonic: "BLS", length: 2, addressingMode: AddressingMode.relative, format: `BLS     ` },
  0x2D: { mnemonic: "BLT", length: 2, addressingMode: AddressingMode.relative, format: `BLT     ` },
  0x2B: { mnemonic: "BMI", length: 2, addressingMode: AddressingMode.relative, format: `BMI     ` },
  0x26: { mnemonic: "BNE", length: 2, addressingMode: AddressingMode.relative, format: `BNE     ` },
  0x2A: { mnemonic: "BPL", length: 2, addressingMode: AddressingMode.relative, format: `BPL     ` },
  0x20: { mnemonic: "BRA", length: 2, addressingMode: AddressingMode.relative, format: `BRA     ` },
  0x21: { mnemonic: "BRN", length: 2, addressingMode: AddressingMode.relative, format: `BRN     ` },
  0x8D: { mnemonic: "BSR", length: 2, addressingMode: AddressingMode.relative, format: `BSR     ` },
  0x28: { mnemonic: "BVC", length: 2, addressingMode: AddressingMode.relative, format: `BVC     ` },
  0x29: { mnemonic: "BVS", length: 2, addressingMode: AddressingMode.relative, format: `BVS     ` },
  0x0F: { mnemonic: "CLR", length: 2, addressingMode: AddressingMode.direct, format: `CLR     ` },
  0x6F: { mnemonic: "CLR", length: 2, addressingMode: AddressingMode.indexed, format: `CLR     ` },
  0x7F: { mnemonic: "CLR", length: 3, addressingMode: AddressingMode.extended, format: `CLR     ` },
  0x4F: { mnemonic: "CLRA", length: 1, addressingMode: AddressingMode.inherent, format: `CLRA` },
  0x5F: { mnemonic: "CLRB", length: 1, addressingMode: AddressingMode.inherent, format: `CLRB` },
  0x81: { mnemonic: "CMPA", length: 2, addressingMode: AddressingMode.immediate, format: `CMPA     #` },
  0x91: { mnemonic: "CMPA", length: 2, addressingMode: AddressingMode.direct, format: `CMPA     ` },
  0xA1: { mnemonic: "CMPA", length: 2, addressingMode: AddressingMode.indexed, format: `CMPA     ` },
  0xB1: { mnemonic: "CMPA", length: 3, addressingMode: AddressingMode.extended, format: `CMPA     ` },
  0xC1: { mnemonic: "CMPB", length: 2, addressingMode: AddressingMode.immediate, format: `CMPB     #` },
  0xD1: { mnemonic: "CMPB", length: 2, addressingMode: AddressingMode.direct, format: `CMPB     ` },
  0xE1: { mnemonic: "CMPB", length: 2, addressingMode: AddressingMode.indexed, format: `CMPB     ` },
  0xF1: { mnemonic: "CMPB", length: 3, addressingMode: AddressingMode.extended, format: `CMPB     ` },
  0x1083: { mnemonic: "CMPD", length: 4, addressingMode: AddressingMode.immediate, format: `CMPD     #` },
  0x1093: { mnemonic: "CMPD", length: 3, addressingMode: AddressingMode.direct, format: `CMPD     ` },
  0x10A3: { mnemonic: "CMPD", length: 3, addressingMode: AddressingMode.indexed, format: `CMPD     ` },
  0x10B3: { mnemonic: "CMPD", length: 4, addressingMode: AddressingMode.extended, format: `CMPD     ` },
  0x118C: { mnemonic: "CMPS", length: 4, addressingMode: AddressingMode.immediate, format: `CMPS     #` },
  0x119C: { mnemonic: "CMPS", length: 3, addressingMode: AddressingMode.direct, format: `CMPS     ` },
  0x11AC: { mnemonic: "CMPS", length: 3, addressingMode: AddressingMode.indexed, format: `CMPS     ` },
  0x11BC: { mnemonic: "CMPS", length: 4, addressingMode: AddressingMode.extended, format: `CMPS     ` },
  0x1183: { mnemonic: "CMPU", length: 4, addressingMode: AddressingMode.immediate, format: `CMPU     #` },
  0x1193: { mnemonic: "CMPU", length: 3, addressingMode: AddressingMode.direct, format: `CMPU     ` },
  0x11A3: { mnemonic: "CMPU", length: 3, addressingMode: AddressingMode.indexed, format: `CMPU     ` },
  0x11B3: { mnemonic: "CMPU", length: 4, addressingMode: AddressingMode.extended, format: `CMPU     ` },
  0x8C: { mnemonic: "CMPX", length: 3, addressingMode: AddressingMode.immediate, format: `CMPX     #` },
  0x9C: { mnemonic: "CMPX", length: 2, addressingMode: AddressingMode.direct, format: `CMPX     ` },
  0xAC: { mnemonic: "CMPX", length: 2, addressingMode: AddressingMode.indexed, format: `CMPX     ` },
  0xBC: { mnemonic: "CMPX", length: 3, addressingMode: AddressingMode.extended, format: `CMPX     ` },
  0x108C: { mnemonic: "CMPY", length: 4, addressingMode: AddressingMode.immediate, format: `CMPY     #` },
  0x109C: { mnemonic: "CMPY", length: 3, addressingMode: AddressingMode.direct, format: `CMPY     ` },
  0x10AC: { mnemonic: "CMPY", length: 3, addressingMode: AddressingMode.indexed, format: `CMPY     ` },
  0x10BC: { mnemonic: "CMPY", length: 4, addressingMode: AddressingMode.extended, format: `CMPY     ` },
  0x03: { mnemonic: "COM", length: 2, addressingMode: AddressingMode.direct, format: `COM     ` },
  0x63: { mnemonic: "COM", length: 2, addressingMode: AddressingMode.indexed, format: `COM     ` },
  0x73: { mnemonic: "COM", length: 3, addressingMode: AddressingMode.extended, format: `COM     ` },
  0x43: { mnemonic: "COMA", length: 1, addressingMode: AddressingMode.inherent, format: `COMA` },
  0x53: { mnemonic: "COMB", length: 1, addressingMode: AddressingMode.inherent, format: `COMB` },
  0x3C: { mnemonic: "CWAI", length: 2, addressingMode: AddressingMode.immediate, format: `CWAI     #` },
  0x19: { mnemonic: "DAA", length: 1, addressingMode: AddressingMode.inherent, format: `DAA` },
  0x0A: { mnemonic: "DEC", length: 2, addressingMode: AddressingMode.direct, format: `DEC     ` },
  0x6A: { mnemonic: "DEC", length: 2, addressingMode: AddressingMode.indexed, format: `DEC     ` },
  0x7A: { mnemonic: "DEC", length: 3, addressingMode: AddressingMode.extended, format: `DEC     ` },
  0x4A: { mnemonic: "DECA", length: 1, addressingMode: AddressingMode.inherent, format: `DECA` },
  0x5A: { mnemonic: "DECB", length: 1, addressingMode: AddressingMode.inherent, format: `DECB` },
  0x88: { mnemonic: "EORA", length: 2, addressingMode: AddressingMode.immediate, format: `EORA     #` },
  0x98: { mnemonic: "EORA", length: 2, addressingMode: AddressingMode.direct, format: `EORA     ` },
  0xA8: { mnemonic: "EORA", length: 2, addressingMode: AddressingMode.indexed, format: `EORA     ` },
  0xB8: { mnemonic: "EORA", length: 3, addressingMode: AddressingMode.extended, format: `EORA     ` },
  0xC8: { mnemonic: "EORB", length: 2, addressingMode: AddressingMode.immediate, format: `EORB     #` },
  0xD8: { mnemonic: "EORB", length: 2, addressingMode: AddressingMode.direct, format: `EORB     ` },
  0xE8: { mnemonic: "EORB", length: 2, addressingMode: AddressingMode.indexed, format: `EORB     ` },
  0xF8: { mnemonic: "EORB", length: 3, addressingMode: AddressingMode.extended, format: `EORB     ` },
  0x1E: { mnemonic: "EXG", length: 2, addressingMode: AddressingMode.immediate, format: `EXG     #` },
  0x0C: { mnemonic: "INC", length: 2, addressingMode: AddressingMode.direct, format: `INC     ` },
  0x6C: { mnemonic: "INC", length: 2, addressingMode: AddressingMode.indexed, format: `INC     ` },
  0x7C: { mnemonic: "INC", length: 3, addressingMode: AddressingMode.extended, format: `INC     ` },
  0x4C: { mnemonic: "INCA", length: 1, addressingMode: AddressingMode.inherent, format: `INCA` },
  0x5C: { mnemonic: "INCB", length: 1, addressingMode: AddressingMode.inherent, format: `INCB` },
  0x0E: { mnemonic: "JMP", length: 2, addressingMode: AddressingMode.direct, format: `JMP     ` },
  0x6E: { mnemonic: "JMP", length: 2, addressingMode: AddressingMode.indexed, format: `JMP     ` },
  0x7E: { mnemonic: "JMP", length: 3, addressingMode: AddressingMode.extended, format: `JMP     ` },
  0x9D: { mnemonic: "JSR", length: 2, addressingMode: AddressingMode.direct, format: `JSR     ` },
  0xAD: { mnemonic: "JSR", length: 2, addressingMode: AddressingMode.indexed, format: `JSR     ` },
  0xBD: { mnemonic: "JSR", length: 3, addressingMode: AddressingMode.extended, format: `JSR     ` },
  0x1025: { mnemonic: "LBCS/LBLO", length: 4, addressingMode: AddressingMode.relative, format: `LBCS/LBLO     ` },
  0x1027: { mnemonic: "LBEQ", length: 4, addressingMode: AddressingMode.relative, format: `LBEQ     ` },
  0x102C: { mnemonic: "LBGE", length: 4, addressingMode: AddressingMode.relative, format: `LBGE     ` },
  0x102E: { mnemonic: "LBGT", length: 4, addressingMode: AddressingMode.relative, format: `LBGT     ` },
  0x1022: { mnemonic: "LBHI", length: 4, addressingMode: AddressingMode.relative, format: `LBHI     ` },
  0x1024: { mnemonic: "LBHS/LBCC", length: 4, addressingMode: AddressingMode.relative, format: `LBHS/LBCC     ` },
  0x102F: { mnemonic: "LBLE", length: 4, addressingMode: AddressingMode.relative, format: `LBLE     ` },
  0x1023: { mnemonic: "LBLS", length: 4, addressingMode: AddressingMode.relative, format: `LBLS     ` },
  0x102D: { mnemonic: "LBLT", length: 4, addressingMode: AddressingMode.relative, format: `LBLT     ` },
  0x102B: { mnemonic: "LBMI", length: 4, addressingMode: AddressingMode.relative, format: `LBMI     ` },
  0x1026: { mnemonic: "LBNE", length: 4, addressingMode: AddressingMode.relative, format: `LBNE     ` },
  0x102A: { mnemonic: "LBPL", length: 4, addressingMode: AddressingMode.relative, format: `LBPL     ` },
  0x16: { mnemonic: "LBRA", length: 3, addressingMode: AddressingMode.relative, format: `LBRA     ` },
  0x1021: { mnemonic: "LBRN", length: 4, addressingMode: AddressingMode.relative, format: `LBRN     ` },
  0x17: { mnemonic: "LBSR", length: 3, addressingMode: AddressingMode.relative, format: `LBSR     ` },
  0x1028: { mnemonic: "LBVC", length: 4, addressingMode: AddressingMode.relative, format: `LBVC     ` },
  0x1029: { mnemonic: "LBVS", length: 4, addressingMode: AddressingMode.relative, format: `LBVS     ` },
  0x86: { mnemonic: "LDA", length: 2, addressingMode: AddressingMode.immediate, format: `LDA     #` },
  0x96: { mnemonic: "LDA", length: 2, addressingMode: AddressingMode.direct, format: `LDA     ` },
  0xA6: { mnemonic: "LDA", length: 2, addressingMode: AddressingMode.indexed, format: `LDA     ` },
  0xB6: { mnemonic: "LDA", length: 3, addressingMode: AddressingMode.extended, format: `LDA     ` },
  0xC6: { mnemonic: "LDB", length: 2, addressingMode: AddressingMode.immediate, format: `LDB     #` },
  0xD6: { mnemonic: "LDB", length: 2, addressingMode: AddressingMode.direct, format: `LDB     ` },
  0xE6: { mnemonic: "LDB", length: 2, addressingMode: AddressingMode.indexed, format: `LDB     ` },
  0xF6: { mnemonic: "LDB", length: 3, addressingMode: AddressingMode.extended, format: `LDB     ` },
  0xCC: { mnemonic: "LDD", length: 3, addressingMode: AddressingMode.immediate, format: `LDD     #` },
  0xDC: { mnemonic: "LDD", length: 2, addressingMode: AddressingMode.direct, format: `LDD     ` },
  0xEC: { mnemonic: "LDD", length: 2, addressingMode: AddressingMode.indexed, format: `LDD     ` },
  0xFC: { mnemonic: "LDD", length: 3, addressingMode: AddressingMode.extended, format: `LDD     ` },
  0x10CE: { mnemonic: "LDS", length: 4, addressingMode: AddressingMode.immediate, format: `LDS     #` },
  0x10DE: { mnemonic: "LDS", length: 3, addressingMode: AddressingMode.direct, format: `LDS     ` },
  0x10EE: { mnemonic: "LDS", length: 3, addressingMode: AddressingMode.indexed, format: `LDS     ` },
  0x10FE: { mnemonic: "LDS", length: 4, addressingMode: AddressingMode.extended, format: `LDS     ` },
  0xCE: { mnemonic: "LDU", length: 3, addressingMode: AddressingMode.immediate, format: `LDU     #` },
  0xDE: { mnemonic: "LDU", length: 2, addressingMode: AddressingMode.direct, format: `LDU     ` },
  0xEE: { mnemonic: "LDU", length: 2, addressingMode: AddressingMode.indexed, format: `LDU     ` },
  0xFE: { mnemonic: "LDU", length: 3, addressingMode: AddressingMode.extended, format: `LDU     ` },
  0x8E: { mnemonic: "LDX", length: 3, addressingMode: AddressingMode.immediate, format: `LDX     #` },
  0x9E: { mnemonic: "LDX", length: 2, addressingMode: AddressingMode.direct, format: `LDX     ` },
  0xAE: { mnemonic: "LDX", length: 2, addressingMode: AddressingMode.indexed, format: `LDX     ` },
  0xBE: { mnemonic: "LDX", length: 3, addressingMode: AddressingMode.extended, format: `LDX     ` },
  0x108E: { mnemonic: "LDY", length: 4, addressingMode: AddressingMode.immediate, format: `LDY     #` },
  0x109E: { mnemonic: "LDY", length: 3, addressingMode: AddressingMode.direct, format: `LDY     ` },
  0x10AE: { mnemonic: "LDY", length: 3, addressingMode: AddressingMode.indexed, format: `LDY     ` },
  0x10BE: { mnemonic: "LDY", length: 4, addressingMode: AddressingMode.extended, format: `LDY     ` },
  0x32: { mnemonic: "LEAS", length: 2, addressingMode: AddressingMode.indexed, format: `LEAS     ` },
  0x33: { mnemonic: "LEAU", length: 2, addressingMode: AddressingMode.indexed, format: `LEAU     ` },
  0x30: { mnemonic: "LEAX", length: 2, addressingMode: AddressingMode.indexed, format: `LEAX     ` },
  0x31: { mnemonic: "LEAY", length: 2, addressingMode: AddressingMode.indexed, format: `LEAY     ` },
  0x04: { mnemonic: "LSR", length: 2, addressingMode: AddressingMode.direct, format: `LSR     ` },
  0x64: { mnemonic: "LSR", length: 2, addressingMode: AddressingMode.indexed, format: `LSR     ` },
  0x74: { mnemonic: "LSR", length: 3, addressingMode: AddressingMode.extended, format: `LSR     ` },
  0x44: { mnemonic: "LSRA", length: 1, addressingMode: AddressingMode.inherent, format: `LSRA` },
  0x54: { mnemonic: "LSRB", length: 1, addressingMode: AddressingMode.inherent, format: `LSRB` },
  0x3D: { mnemonic: "MUL", length: 1, addressingMode: AddressingMode.inherent, format: `MUL` },
  0x00: { mnemonic: "NEG", length: 2, addressingMode: AddressingMode.direct, format: `NEG     ` },
  0x60: { mnemonic: "NEG", length: 2, addressingMode: AddressingMode.indexed, format: `NEG     ` },
  0x70: { mnemonic: "NEG", length: 3, addressingMode: AddressingMode.extended, format: `NEG     ` },
  0x40: { mnemonic: "NEGA", length: 1, addressingMode: AddressingMode.inherent, format: `NEGA` },
  0x50: { mnemonic: "NEGB", length: 1, addressingMode: AddressingMode.inherent, format: `NEGB` },
  0x12: { mnemonic: "NOP", length: 1, addressingMode: AddressingMode.inherent, format: `NOP` },
  0x8A: { mnemonic: "ORA", length: 2, addressingMode: AddressingMode.immediate, format: `ORA     #` },
  0x9A: { mnemonic: "ORA", length: 2, addressingMode: AddressingMode.direct, format: `ORA     ` },
  0xAA: { mnemonic: "ORA", length: 2, addressingMode: AddressingMode.indexed, format: `ORA     ` },
  0xBA: { mnemonic: "ORA", length: 3, addressingMode: AddressingMode.extended, format: `ORA     ` },
  0xCA: { mnemonic: "ORB", length: 2, addressingMode: AddressingMode.immediate, format: `ORB     #` },
  0xDA: { mnemonic: "ORB", length: 2, addressingMode: AddressingMode.direct, format: `ORB     ` },
  0xEA: { mnemonic: "ORB", length: 2, addressingMode: AddressingMode.indexed, format: `ORB     ` },
  0xFA: { mnemonic: "ORB", length: 3, addressingMode: AddressingMode.extended, format: `ORB     ` },
  0x1A: { mnemonic: "ORCC", length: 2, addressingMode: AddressingMode.immediate, format: `ORCC     #` },
  0x34: { mnemonic: "PSHS", length: 2, addressingMode: AddressingMode.immediate, format: `PSHS     #` },
  0x36: { mnemonic: "PSHU", length: 2, addressingMode: AddressingMode.immediate, format: `PSHU     #` },
  0x35: { mnemonic: "PULS", length: 2, addressingMode: AddressingMode.immediate, format: `PULS     #` },
  0x37: { mnemonic: "PULU", length: 2, addressingMode: AddressingMode.immediate, format: `PULU     #` },
  0x09: { mnemonic: "ROL", length: 2, addressingMode: AddressingMode.direct, format: `ROL     ` },
  0x69: { mnemonic: "ROL", length: 2, addressingMode: AddressingMode.indexed, format: `ROL     ` },
  0x79: { mnemonic: "ROL", length: 3, addressingMode: AddressingMode.extended, format: `ROL     ` },
  0x49: { mnemonic: "ROLA", length: 1, addressingMode: AddressingMode.inherent, format: `ROLA` },
  0x59: { mnemonic: "ROLB", length: 1, addressingMode: AddressingMode.inherent, format: `ROLB` },
  0x06: { mnemonic: "ROR", length: 2, addressingMode: AddressingMode.direct, format: `ROR     ` },
  0x66: { mnemonic: "ROR", length: 2, addressingMode: AddressingMode.indexed, format: `ROR     ` },
  0x76: { mnemonic: "ROR", length: 3, addressingMode: AddressingMode.extended, format: `ROR     ` },
  0x46: { mnemonic: "RORA", length: 1, addressingMode: AddressingMode.inherent, format: `RORA` },
  0x56: { mnemonic: "RORB", length: 1, addressingMode: AddressingMode.inherent, format: `RORB` },
  0x3B: { mnemonic: "RTI", length: 1, addressingMode: AddressingMode.inherent, format: `RTI` },
  0x39: { mnemonic: "RTS", length: 1, addressingMode: AddressingMode.inherent, format: `RTS` },
  0x82: { mnemonic: "SBCA", length: 2, addressingMode: AddressingMode.immediate, format: `SBCA     #` },
  0x92: { mnemonic: "SBCA", length: 2, addressingMode: AddressingMode.direct, format: `SBCA     ` },
  0xA2: { mnemonic: "SBCA", length: 2, addressingMode: AddressingMode.indexed, format: `SBCA     ` },
  0xB2: { mnemonic: "SBCA", length: 3, addressingMode: AddressingMode.extended, format: `SBCA     ` },
  0xC2: { mnemonic: "SBCB", length: 2, addressingMode: AddressingMode.immediate, format: `SBCB     #` },
  0xD2: { mnemonic: "SBCB", length: 2, addressingMode: AddressingMode.direct, format: `SBCB     ` },
  0xE2: { mnemonic: "SBCB", length: 2, addressingMode: AddressingMode.indexed, format: `SBCB     ` },
  0xF2: { mnemonic: "SBCB", length: 3, addressingMode: AddressingMode.extended, format: `SBCB     ` },
  0x1D: { mnemonic: "SEX", length: 1, addressingMode: AddressingMode.inherent, format: `SEX` },
  0x97: { mnemonic: "STA", length: 2, addressingMode: AddressingMode.direct, format: `STA     ` },
  0xA7: { mnemonic: "STA", length: 2, addressingMode: AddressingMode.indexed, format: `STA     ` },
  0xB7: { mnemonic: "STA", length: 3, addressingMode: AddressingMode.extended, format: `STA     ` },
  0xD7: { mnemonic: "STB", length: 2, addressingMode: AddressingMode.direct, format: `STB     ` },
  0xE7: { mnemonic: "STB", length: 2, addressingMode: AddressingMode.indexed, format: `STB     ` },
  0xF7: { mnemonic: "STB", length: 3, addressingMode: AddressingMode.extended, format: `STB     ` },
  0xDD: { mnemonic: "STD", length: 2, addressingMode: AddressingMode.direct, format: `STD     ` },
  0xED: { mnemonic: "STD", length: 2, addressingMode: AddressingMode.indexed, format: `STD     ` },
  0xFD: { mnemonic: "STD", length: 3, addressingMode: AddressingMode.extended, format: `STD     ` },
  0x10DF: { mnemonic: "STS", length: 3, addressingMode: AddressingMode.direct, format: `STS     ` },
  0x10EF: { mnemonic: "STS", length: 3, addressingMode: AddressingMode.indexed, format: `STS     ` },
  0x10FF: { mnemonic: "STS", length: 4, addressingMode: AddressingMode.extended, format: `STS     ` },
  0xDF: { mnemonic: "STU", length: 2, addressingMode: AddressingMode.direct, format: `STU     ` },
  0xEF: { mnemonic: "STU", length: 2, addressingMode: AddressingMode.indexed, format: `STU     ` },
  0xFF: { mnemonic: "STU", length: 3, addressingMode: AddressingMode.extended, format: `STU     ` },
  0x9F: { mnemonic: "STX", length: 2, addressingMode: AddressingMode.direct, format: `STX     ` },
  0xAF: { mnemonic: "STX", length: 2, addressingMode: AddressingMode.indexed, format: `STX     ` },
  0xBF: { mnemonic: "STX", length: 3, addressingMode: AddressingMode.extended, format: `STX     ` },
  0x109F: { mnemonic: "STY", length: 3, addressingMode: AddressingMode.direct, format: `STY     ` },
  0x10AF: { mnemonic: "STY", length: 3, addressingMode: AddressingMode.indexed, format: `STY     ` },
  0x10BF: { mnemonic: "STY", length: 4, addressingMode: AddressingMode.extended, format: `STY     ` },
  0x80: { mnemonic: "SUBA", length: 2, addressingMode: AddressingMode.immediate, format: `SUBA     #` },
  0x90: { mnemonic: "SUBA", length: 2, addressingMode: AddressingMode.direct, format: `SUBA     ` },
  0xA0: { mnemonic: "SUBA", length: 2, addressingMode: AddressingMode.indexed, format: `SUBA     ` },
  0xB0: { mnemonic: "SUBA", length: 3, addressingMode: AddressingMode.extended, format: `SUBA     ` },
  0xC0: { mnemonic: "SUBB", length: 2, addressingMode: AddressingMode.immediate, format: `SUBB     #` },
  0xD0: { mnemonic: "SUBB", length: 2, addressingMode: AddressingMode.direct, format: `SUBB     ` },
  0xE0: { mnemonic: "SUBB", length: 2, addressingMode: AddressingMode.indexed, format: `SUBB     ` },
  0xF0: { mnemonic: "SUBB", length: 3, addressingMode: AddressingMode.extended, format: `SUBB     ` },
  0x83: { mnemonic: "SUBD", length: 3, addressingMode: AddressingMode.immediate, format: `SUBD     #` },
  0x93: { mnemonic: "SUBD", length: 2, addressingMode: AddressingMode.direct, format: `SUBD     ` },
  0xA3: { mnemonic: "SUBD", length: 2, addressingMode: AddressingMode.indexed, format: `SUBD     ` },
  0xB3: { mnemonic: "SUBD", length: 3, addressingMode: AddressingMode.extended, format: `SUBD     ` },
  0x3F: { mnemonic: "SWI", length: 1, addressingMode: AddressingMode.inherent, format: `SWI` },
  0x103F: { mnemonic: "SWI2", length: 2, addressingMode: AddressingMode.inherent, format: `SWI2` },
  0x13: { mnemonic: "SYNC", length: 1, addressingMode: AddressingMode.inherent, format: `SYNC` },
  0x1F: { mnemonic: "TFR", length: 2, addressingMode: AddressingMode.immediate, format: `TFR     #` },
  0x0D: { mnemonic: "TST", length: 2, addressingMode: AddressingMode.direct, format: `TST     ` },
  0x6D: { mnemonic: "TST", length: 2, addressingMode: AddressingMode.indexed, format: `TST     ` },
  0x7D: { mnemonic: "TST", length: 3, addressingMode: AddressingMode.extended, format: `TST     ` },
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
 * decodeSucceeded: true if the instruction was correctly decoded.
 * address: the virtual address of the instruction
 * size: the size of the instruction in bytes
 * opcode: integer representing the opcode
 * operands:
 */


export function disassemble(binaryBuffer, offset) {
  const input = new Uint8Array(binaryBuffer);

  let instructions = [];

  let virtualMemoryAddress = offset;

  let i = 0;
  while (i < input.byteLength) {

    let currentLen = 1;

    let opcode = input[i];
    if (opcode == 0x10 || opcode == 0x10) {

      ++currentLen;
      ++i;
      if (i >= input.byteLength) {
        instructions.push({ succeeded: false, message: "Second opcode byte not found", mnemonic: "???" });
        return instructions;
      }

      opcode <<= 8;
      opcode += input[i];

      instruction = Opcodes[opcode];
      if (instruction === undefined)
      {
        instructions.push({ succeeded: false, message: "Opcode not found", mnemonic: "???" });
        return instructions;
      }

      
      if (instruction.addressingMode === AddressingMode.inherent) {
        // assert that currentLen === instruction.length
        instructions.push({ succeeded: true, message: "OK", mnemonic: instruction.mnemonic, address: virtualMemoryAddress });
      }
      else if (instruction.addressingMode === AddressingMode.immediate) {
      }
      else if (instruction.addressingMode === AddressingMode.inherent) {
      }
      else if (instruction.addressingMode === AddressingMode.inherent) {
      }
      else if (instruction.addressingMode === AddressingMode.inherent) {
      }




      ++i;

      virtualMemoryAddress += i;

    }

    

  }

}; 