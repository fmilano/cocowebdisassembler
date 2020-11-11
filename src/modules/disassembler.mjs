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
  0x3A: { mnemonic: "ABX", length: 1, addressingMode: inherent, format: `ABX` },
  0x89: { mnemonic: "ADCA", length: 2, addressingMode: immediate, format: `ADCA     #${operand}` },
  0x99: { mnemonic: "ADCA", length: 2, addressingMode: direct, format: `ADCA     ${operand}` },
  0xA9: { mnemonic: "ADCA", length: 2, addressingMode: indexed, format: `ADCA     ${operand}` },
  0xB9: { mnemonic: "ADCA", length: 3, addressingMode: extended, format: `ADCA     ${operand}` },
  0xC9: { mnemonic: "ADCB", length: 2, addressingMode: immediate, format: `ADCB     #${operand}` },
  0xD9: { mnemonic: "ADCB", length: 2, addressingMode: direct, format: `ADCB     ${operand}` },
  0xE9: { mnemonic: "ADCB", length: 2, addressingMode: indexed, format: `ADCB     ${operand}` },
  0xF9: { mnemonic: "ADCB", length: 3, addressingMode: extended, format: `ADCB     ${operand}` },
  0x8B: { mnemonic: "ADDA", length: 2, addressingMode: immediate, format: `ADDA     #${operand}` },
  0x9B: { mnemonic: "ADDA", length: 2, addressingMode: direct, format: `ADDA     ${operand}` },
  0xAB: { mnemonic: "ADDA", length: 2, addressingMode: indexed, format: `ADDA     ${operand}` },
  0xBB: { mnemonic: "ADDA", length: 3, addressingMode: extended, format: `ADDA     ${operand}` },
  0xCB: { mnemonic: "ADDB", length: 2, addressingMode: immediate, format: `ADDB     #${operand}` },
  0xDB: { mnemonic: "ADDB", length: 2, addressingMode: direct, format: `ADDB     ${operand}` },
  0xEB: { mnemonic: "ADDB", length: 2, addressingMode: indexed, format: `ADDB     ${operand}` },
  0xFB: { mnemonic: "ADDB", length: 3, addressingMode: extended, format: `ADDB     ${operand}` },
  0xC3: { mnemonic: "ADDD", length: 3, addressingMode: immediate, format: `ADDD     #${operand}` },
  0xD3: { mnemonic: "ADDD", length: 2, addressingMode: direct, format: `ADDD     ${operand}` },
  0xE3: { mnemonic: "ADDD", length: 2, addressingMode: indexed, format: `ADDD     ${operand}` },
  0xF3: { mnemonic: "ADDD", length: 3, addressingMode: extended, format: `ADDD     ${operand}` },
  0x84: { mnemonic: "ANDA", length: 2, addressingMode: immediate, format: `ANDA     #${operand}` },
  0x94: { mnemonic: "ANDA", length: 2, addressingMode: direct, format: `ANDA     ${operand}` },
  0xA4: { mnemonic: "ANDA", length: 2, addressingMode: indexed, format: `ANDA     ${operand}` },
  0xB4: { mnemonic: "ANDA", length: 3, addressingMode: extended, format: `ANDA     ${operand}` },
  0xC4: { mnemonic: "ANDB", length: 2, addressingMode: immediate, format: `ANDB     #${operand}` },
  0xD4: { mnemonic: "ANDB", length: 2, addressingMode: direct, format: `ANDB     ${operand}` },
  0xE4: { mnemonic: "ANDB", length: 2, addressingMode: indexed, format: `ANDB     ${operand}` },
  0xF4: { mnemonic: "ANDB", length: 3, addressingMode: extended, format: `ANDB     ${operand}` },
  0x1C: { mnemonic: "ANDCC", length: 2, addressingMode: immediate, format: `ANDCC     #${operand}` },
  0x08: { mnemonic: "ASL/LSL", length: 2, addressingMode: direct, format: `ASL/LSL     ${operand}` },
  0x68: { mnemonic: "ASL/LSL", length: 2, addressingMode: indexed, format: `ASL/LSL     ${operand}` },
  0x78: { mnemonic: "ASL/LSL", length: 3, addressingMode: extended, format: `ASL/LSL     ${operand}` },
  0x48: { mnemonic: "ASLA/LSLA", length: 1, addressingMode: inherent, format: `ASLA/LSLA` },
  0x58: { mnemonic: "ASLB/LSLB", length: 1, addressingMode: inherent, format: `ASLB/LSLB` },
  0x07: { mnemonic: "ASR", length: 2, addressingMode: direct, format: `ASR     ${operand}` },
  0x67: { mnemonic: "ASR", length: 2, addressingMode: indexed, format: `ASR     ${operand}` },
  0x77: { mnemonic: "ASR", length: 3, addressingMode: extended, format: `ASR     ${operand}` },
  0x47: { mnemonic: "ASRA", length: 1, addressingMode: inherent, format: `ASRA` },
  0x57: { mnemonic: "ASRB", length: 1, addressingMode: inherent, format: `ASRB` },
  0x27: { mnemonic: "BEQ", length: 2, addressingMode: relative, format: `BEQ     ${operand}` },
  0x2C: { mnemonic: "BGE", length: 2, addressingMode: relative, format: `BGE     ${operand}` },
  0x2E: { mnemonic: "BGT", length: 2, addressingMode: relative, format: `BGT     ${operand}` },
  0x22: { mnemonic: "BHI", length: 2, addressingMode: relative, format: `BHI     ${operand}` },
  0x24: { mnemonic: "BHS/BCC", length: 2, addressingMode: relative, format: `BHS/BCC     ${operand}` },
  0x85: { mnemonic: "BITA", length: 2, addressingMode: immediate, format: `BITA     #${operand}` },
  0x95: { mnemonic: "BITA", length: 2, addressingMode: direct, format: `BITA     ${operand}` },
  0xA5: { mnemonic: "BITA", length: 2, addressingMode: indexed, format: `BITA     ${operand}` },
  0xB5: { mnemonic: "BITA", length: 3, addressingMode: extended, format: `BITA     ${operand}` },
  0xC5: { mnemonic: "BITB", length: 2, addressingMode: immediate, format: `BITB     #${operand}` },
  0xD5: { mnemonic: "BITB", length: 2, addressingMode: direct, format: `BITB     ${operand}` },
  0xE5: { mnemonic: "BITB", length: 2, addressingMode: indexed, format: `BITB     ${operand}` },
  0xF5: { mnemonic: "BITB", length: 3, addressingMode: extended, format: `BITB     ${operand}` },
  0x2F: { mnemonic: "BLE", length: 2, addressingMode: relative, format: `BLE     ${operand}` },
  0x25: { mnemonic: "BLO/BCS", length: 2, addressingMode: relative, format: `BLO/BCS     ${operand}` },
  0x23: { mnemonic: "BLS", length: 2, addressingMode: relative, format: `BLS     ${operand}` },
  0x2D: { mnemonic: "BLT", length: 2, addressingMode: relative, format: `BLT     ${operand}` },
  0x2B: { mnemonic: "BMI", length: 2, addressingMode: relative, format: `BMI     ${operand}` },
  0x26: { mnemonic: "BNE", length: 2, addressingMode: relative, format: `BNE     ${operand}` },
  0x2A: { mnemonic: "BPL", length: 2, addressingMode: relative, format: `BPL     ${operand}` },
  0x20: { mnemonic: "BRA", length: 2, addressingMode: relative, format: `BRA     ${operand}` },
  0x21: { mnemonic: "BRN", length: 2, addressingMode: relative, format: `BRN     ${operand}` },
  0x8D: { mnemonic: "BSR", length: 2, addressingMode: relative, format: `BSR     ${operand}` },
  0x28: { mnemonic: "BVC", length: 2, addressingMode: relative, format: `BVC     ${operand}` },
  0x29: { mnemonic: "BVS", length: 2, addressingMode: relative, format: `BVS     ${operand}` },
  0x0F: { mnemonic: "CLR", length: 2, addressingMode: direct, format: `CLR     ${operand}` },
  0x6F: { mnemonic: "CLR", length: 2, addressingMode: indexed, format: `CLR     ${operand}` },
  0x7F: { mnemonic: "CLR", length: 3, addressingMode: extended, format: `CLR     ${operand}` },
  0x4F: { mnemonic: "CLRA", length: 1, addressingMode: inherent, format: `CLRA` },
  0x5F: { mnemonic: "CLRB", length: 1, addressingMode: inherent, format: `CLRB` },
  0x81: { mnemonic: "CMPA", length: 2, addressingMode: immediate, format: `CMPA     #${operand}` },
  0x91: { mnemonic: "CMPA", length: 2, addressingMode: direct, format: `CMPA     ${operand}` },
  0xA1: { mnemonic: "CMPA", length: 2, addressingMode: indexed, format: `CMPA     ${operand}` },
  0xB1: { mnemonic: "CMPA", length: 3, addressingMode: extended, format: `CMPA     ${operand}` },
  0xC1: { mnemonic: "CMPB", length: 2, addressingMode: immediate, format: `CMPB     #${operand}` },
  0xD1: { mnemonic: "CMPB", length: 2, addressingMode: direct, format: `CMPB     ${operand}` },
  0xE1: { mnemonic: "CMPB", length: 2, addressingMode: indexed, format: `CMPB     ${operand}` },
  0xF1: { mnemonic: "CMPB", length: 3, addressingMode: extended, format: `CMPB     ${operand}` },
  0x1083: { mnemonic: "CMPD", length: 4, addressingMode: immediate, format: `CMPD     #${operand}` },
  0x1093: { mnemonic: "CMPD", length: 3, addressingMode: direct, format: `CMPD     ${operand}` },
  0x10A3: { mnemonic: "CMPD", length: 3, addressingMode: indexed, format: `CMPD     ${operand}` },
  0x10B3: { mnemonic: "CMPD", length: 4, addressingMode: extended, format: `CMPD     ${operand}` },
  0x118C: { mnemonic: "CMPS", length: 4, addressingMode: immediate, format: `CMPS     #${operand}` },
  0x119C: { mnemonic: "CMPS", length: 3, addressingMode: direct, format: `CMPS     ${operand}` },
  0x11AC: { mnemonic: "CMPS", length: 3, addressingMode: indexed, format: `CMPS     ${operand}` },
  0x11BC: { mnemonic: "CMPS", length: 4, addressingMode: extended, format: `CMPS     ${operand}` },
  0x1183: { mnemonic: "CMPU", length: 4, addressingMode: immediate, format: `CMPU     #${operand}` },
  0x1193: { mnemonic: "CMPU", length: 3, addressingMode: direct, format: `CMPU     ${operand}` },
  0x11A3: { mnemonic: "CMPU", length: 3, addressingMode: indexed, format: `CMPU     ${operand}` },
  0x11B3: { mnemonic: "CMPU", length: 4, addressingMode: extended, format: `CMPU     ${operand}` },
  0x8C: { mnemonic: "CMPX", length: 3, addressingMode: immediate, format: `CMPX     #${operand}` },
  0x9C: { mnemonic: "CMPX", length: 2, addressingMode: direct, format: `CMPX     ${operand}` },
  0xAC: { mnemonic: "CMPX", length: 2, addressingMode: indexed, format: `CMPX     ${operand}` },
  0xBC: { mnemonic: "CMPX", length: 3, addressingMode: extended, format: `CMPX     ${operand}` },
  0x108C: { mnemonic: "CMPY", length: 4, addressingMode: immediate, format: `CMPY     #${operand}` },
  0x109C: { mnemonic: "CMPY", length: 3, addressingMode: direct, format: `CMPY     ${operand}` },
  0x10AC: { mnemonic: "CMPY", length: 3, addressingMode: indexed, format: `CMPY     ${operand}` },
  0x10BC: { mnemonic: "CMPY", length: 4, addressingMode: extended, format: `CMPY     ${operand}` },
  0x03: { mnemonic: "COM", length: 2, addressingMode: direct, format: `COM     ${operand}` },
  0x63: { mnemonic: "COM", length: 2, addressingMode: indexed, format: `COM     ${operand}` },
  0x73: { mnemonic: "COM", length: 3, addressingMode: extended, format: `COM     ${operand}` },
  0x43: { mnemonic: "COMA", length: 1, addressingMode: inherent, format: `COMA` },
  0x53: { mnemonic: "COMB", length: 1, addressingMode: inherent, format: `COMB` },
  0x3C: { mnemonic: "CWAI", length: 2, addressingMode: immediate, format: `CWAI     #${operand}` },
  0x19: { mnemonic: "DAA", length: 1, addressingMode: inherent, format: `DAA` },
  0x0A: { mnemonic: "DEC", length: 2, addressingMode: direct, format: `DEC     ${operand}` },
  0x6A: { mnemonic: "DEC", length: 2, addressingMode: indexed, format: `DEC     ${operand}` },
  0x7A: { mnemonic: "DEC", length: 3, addressingMode: extended, format: `DEC     ${operand}` },
  0x4A: { mnemonic: "DECA", length: 1, addressingMode: inherent, format: `DECA` },
  0x5A: { mnemonic: "DECB", length: 1, addressingMode: inherent, format: `DECB` },
  0x88: { mnemonic: "EORA", length: 2, addressingMode: immediate, format: `EORA     #${operand}` },
  0x98: { mnemonic: "EORA", length: 2, addressingMode: direct, format: `EORA     ${operand}` },
  0xA8: { mnemonic: "EORA", length: 2, addressingMode: indexed, format: `EORA     ${operand}` },
  0xB8: { mnemonic: "EORA", length: 3, addressingMode: extended, format: `EORA     ${operand}` },
  0xC8: { mnemonic: "EORB", length: 2, addressingMode: immediate, format: `EORB     #${operand}` },
  0xD8: { mnemonic: "EORB", length: 2, addressingMode: direct, format: `EORB     ${operand}` },
  0xE8: { mnemonic: "EORB", length: 2, addressingMode: indexed, format: `EORB     ${operand}` },
  0xF8: { mnemonic: "EORB", length: 3, addressingMode: extended, format: `EORB     ${operand}` },
  0x1E: { mnemonic: "EXG", length: 2, addressingMode: immediate, format: `EXG     #${operand}` },
  0x0C: { mnemonic: "INC", length: 2, addressingMode: direct, format: `INC     ${operand}` },
  0x6C: { mnemonic: "INC", length: 2, addressingMode: indexed, format: `INC     ${operand}` },
  0x7C: { mnemonic: "INC", length: 3, addressingMode: extended, format: `INC     ${operand}` },
  0x4C: { mnemonic: "INCA", length: 1, addressingMode: inherent, format: `INCA` },
  0x5C: { mnemonic: "INCB", length: 1, addressingMode: inherent, format: `INCB` },
  0x0E: { mnemonic: "JMP", length: 2, addressingMode: direct, format: `JMP     ${operand}` },
  0x6E: { mnemonic: "JMP", length: 2, addressingMode: indexed, format: `JMP     ${operand}` },
  0x7E: { mnemonic: "JMP", length: 3, addressingMode: extended, format: `JMP     ${operand}` },
  0x9D: { mnemonic: "JSR", length: 2, addressingMode: direct, format: `JSR     ${operand}` },
  0xAD: { mnemonic: "JSR", length: 2, addressingMode: indexed, format: `JSR     ${operand}` },
  0xBD: { mnemonic: "JSR", length: 3, addressingMode: extended, format: `JSR     ${operand}` },
  0x1025: { mnemonic: "LBCS/LBLO", length: 4, addressingMode: relative, format: `LBCS/LBLO     ${operand}` },
  0x1027: { mnemonic: "LBEQ", length: 4, addressingMode: relative, format: `LBEQ     ${operand}` },
  0x102C: { mnemonic: "LBGE", length: 4, addressingMode: relative, format: `LBGE     ${operand}` },
  0x102E: { mnemonic: "LBGT", length: 4, addressingMode: relative, format: `LBGT     ${operand}` },
  0x1022: { mnemonic: "LBHI", length: 4, addressingMode: relative, format: `LBHI     ${operand}` },
  0x1024: { mnemonic: "LBHS/LBCC", length: 4, addressingMode: relative, format: `LBHS/LBCC     ${operand}` },
  0x102F: { mnemonic: "LBLE", length: 4, addressingMode: relative, format: `LBLE     ${operand}` },
  0x1023: { mnemonic: "LBLS", length: 4, addressingMode: relative, format: `LBLS     ${operand}` },
  0x102D: { mnemonic: "LBLT", length: 4, addressingMode: relative, format: `LBLT     ${operand}` },
  0x102B: { mnemonic: "LBMI", length: 4, addressingMode: relative, format: `LBMI     ${operand}` },
  0x1026: { mnemonic: "LBNE", length: 4, addressingMode: relative, format: `LBNE     ${operand}` },
  0x102A: { mnemonic: "LBPL", length: 4, addressingMode: relative, format: `LBPL     ${operand}` },
  0x16: { mnemonic: "LBRA", length: 3, addressingMode: relative, format: `LBRA     ${operand}` },
  0x1021: { mnemonic: "LBRN", length: 4, addressingMode: relative, format: `LBRN     ${operand}` },
  0x17: { mnemonic: "LBSR", length: 3, addressingMode: relative, format: `LBSR     ${operand}` },
  0x1028: { mnemonic: "LBVC", length: 4, addressingMode: relative, format: `LBVC     ${operand}` },
  0x1029: { mnemonic: "LBVS", length: 4, addressingMode: relative, format: `LBVS     ${operand}` },
  0x86: { mnemonic: "LDA", length: 2, addressingMode: immediate, format: `LDA     #${operand}` },
  0x96: { mnemonic: "LDA", length: 2, addressingMode: direct, format: `LDA     ${operand}` },
  0xA6: { mnemonic: "LDA", length: 2, addressingMode: indexed, format: `LDA     ${operand}` },
  0xB6: { mnemonic: "LDA", length: 3, addressingMode: extended, format: `LDA     ${operand}` },
  0xC6: { mnemonic: "LDB", length: 2, addressingMode: immediate, format: `LDB     #${operand}` },
  0xD6: { mnemonic: "LDB", length: 2, addressingMode: direct, format: `LDB     ${operand}` },
  0xE6: { mnemonic: "LDB", length: 2, addressingMode: indexed, format: `LDB     ${operand}` },
  0xF6: { mnemonic: "LDB", length: 3, addressingMode: extended, format: `LDB     ${operand}` },
  0xCC: { mnemonic: "LDD", length: 3, addressingMode: immediate, format: `LDD     #${operand}` },
  0xDC: { mnemonic: "LDD", length: 2, addressingMode: direct, format: `LDD     ${operand}` },
  0xEC: { mnemonic: "LDD", length: 2, addressingMode: indexed, format: `LDD     ${operand}` },
  0xFC: { mnemonic: "LDD", length: 3, addressingMode: extended, format: `LDD     ${operand}` },
  0x10CE: { mnemonic: "LDS", length: 4, addressingMode: immediate, format: `LDS     #${operand}` },
  0x10DE: { mnemonic: "LDS", length: 3, addressingMode: direct, format: `LDS     ${operand}` },
  0x10EE: { mnemonic: "LDS", length: 3, addressingMode: indexed, format: `LDS     ${operand}` },
  0x10FE: { mnemonic: "LDS", length: 4, addressingMode: extended, format: `LDS     ${operand}` },
  0xCE: { mnemonic: "LDU", length: 3, addressingMode: immediate, format: `LDU     #${operand}` },
  0xDE: { mnemonic: "LDU", length: 2, addressingMode: direct, format: `LDU     ${operand}` },
  0xEE: { mnemonic: "LDU", length: 2, addressingMode: indexed, format: `LDU     ${operand}` },
  0xFE: { mnemonic: "LDU", length: 3, addressingMode: extended, format: `LDU     ${operand}` },
  0x8E: { mnemonic: "LDX", length: 3, addressingMode: immediate, format: `LDX     #${operand}` },
  0x9E: { mnemonic: "LDX", length: 2, addressingMode: direct, format: `LDX     ${operand}` },
  0xAE: { mnemonic: "LDX", length: 2, addressingMode: indexed, format: `LDX     ${operand}` },
  0xBE: { mnemonic: "LDX", length: 3, addressingMode: extended, format: `LDX     ${operand}` },
  0x108E: { mnemonic: "LDY", length: 4, addressingMode: immediate, format: `LDY     #${operand}` },
  0x109E: { mnemonic: "LDY", length: 3, addressingMode: direct, format: `LDY     ${operand}` },
  0x10AE: { mnemonic: "LDY", length: 3, addressingMode: indexed, format: `LDY     ${operand}` },
  0x10BE: { mnemonic: "LDY", length: 4, addressingMode: extended, format: `LDY     ${operand}` },
  0x32: { mnemonic: "LEAS", length: 2, addressingMode: indexed, format: `LEAS     ${operand}` },
  0x33: { mnemonic: "LEAU", length: 2, addressingMode: indexed, format: `LEAU     ${operand}` },
  0x30: { mnemonic: "LEAX", length: 2, addressingMode: indexed, format: `LEAX     ${operand}` },
  0x31: { mnemonic: "LEAY", length: 2, addressingMode: indexed, format: `LEAY     ${operand}` },
  0x04: { mnemonic: "LSR", length: 2, addressingMode: direct, format: `LSR     ${operand}` },
  0x64: { mnemonic: "LSR", length: 2, addressingMode: indexed, format: `LSR     ${operand}` },
  0x74: { mnemonic: "LSR", length: 3, addressingMode: extended, format: `LSR     ${operand}` },
  0x44: { mnemonic: "LSRA", length: 1, addressingMode: inherent, format: `LSRA` },
  0x54: { mnemonic: "LSRB", length: 1, addressingMode: inherent, format: `LSRB` },
  0x3D: { mnemonic: "MUL", length: 1, addressingMode: inherent, format: `MUL` },
  0x00: { mnemonic: "NEG", length: 2, addressingMode: direct, format: `NEG     ${operand}` },
  0x60: { mnemonic: "NEG", length: 2, addressingMode: indexed, format: `NEG     ${operand}` },
  0x70: { mnemonic: "NEG", length: 3, addressingMode: extended, format: `NEG     ${operand}` },
  0x40: { mnemonic: "NEGA", length: 1, addressingMode: inherent, format: `NEGA` },
  0x50: { mnemonic: "NEGB", length: 1, addressingMode: inherent, format: `NEGB` },
  0x12: { mnemonic: "NOP", length: 1, addressingMode: inherent, format: `NOP` },
  0x8A: { mnemonic: "ORA", length: 2, addressingMode: immediate, format: `ORA     #${operand}` },
  0x9A: { mnemonic: "ORA", length: 2, addressingMode: direct, format: `ORA     ${operand}` },
  0xAA: { mnemonic: "ORA", length: 2, addressingMode: indexed, format: `ORA     ${operand}` },
  0xBA: { mnemonic: "ORA", length: 3, addressingMode: extended, format: `ORA     ${operand}` },
  0xCA: { mnemonic: "ORB", length: 2, addressingMode: immediate, format: `ORB     #${operand}` },
  0xDA: { mnemonic: "ORB", length: 2, addressingMode: direct, format: `ORB     ${operand}` },
  0xEA: { mnemonic: "ORB", length: 2, addressingMode: indexed, format: `ORB     ${operand}` },
  0xFA: { mnemonic: "ORB", length: 3, addressingMode: extended, format: `ORB     ${operand}` },
  0x1A: { mnemonic: "ORCC", length: 2, addressingMode: immediate, format: `ORCC     #${operand}` },
  0x34: { mnemonic: "PSHS", length: 2, addressingMode: immediate, format: `PSHS     #${operand}` },
  0x36: { mnemonic: "PSHU", length: 2, addressingMode: immediate, format: `PSHU     #${operand}` },
  0x35: { mnemonic: "PULS", length: 2, addressingMode: immediate, format: `PULS     #${operand}` },
  0x37: { mnemonic: "PULU", length: 2, addressingMode: immediate, format: `PULU     #${operand}` },
  0x09: { mnemonic: "ROL", length: 2, addressingMode: direct, format: `ROL     ${operand}` },
  0x69: { mnemonic: "ROL", length: 2, addressingMode: indexed, format: `ROL     ${operand}` },
  0x79: { mnemonic: "ROL", length: 3, addressingMode: extended, format: `ROL     ${operand}` },
  0x49: { mnemonic: "ROLA", length: 1, addressingMode: inherent, format: `ROLA` },
  0x59: { mnemonic: "ROLB", length: 1, addressingMode: inherent, format: `ROLB` },
  0x06: { mnemonic: "ROR", length: 2, addressingMode: direct, format: `ROR     ${operand}` },
  0x66: { mnemonic: "ROR", length: 2, addressingMode: indexed, format: `ROR     ${operand}` },
  0x76: { mnemonic: "ROR", length: 3, addressingMode: extended, format: `ROR     ${operand}` },
  0x46: { mnemonic: "RORA", length: 1, addressingMode: inherent, format: `RORA` },
  0x56: { mnemonic: "RORB", length: 1, addressingMode: inherent, format: `RORB` },
  0x3B: { mnemonic: "RTI", length: 1, addressingMode: inherent, format: `RTI` },
  0x39: { mnemonic: "RTS", length: 1, addressingMode: inherent, format: `RTS` },
  0x82: { mnemonic: "SBCA", length: 2, addressingMode: immediate, format: `SBCA     #${operand}` },
  0x92: { mnemonic: "SBCA", length: 2, addressingMode: direct, format: `SBCA     ${operand}` },
  0xA2: { mnemonic: "SBCA", length: 2, addressingMode: indexed, format: `SBCA     ${operand}` },
  0xB2: { mnemonic: "SBCA", length: 3, addressingMode: extended, format: `SBCA     ${operand}` },
  0xC2: { mnemonic: "SBCB", length: 2, addressingMode: immediate, format: `SBCB     #${operand}` },
  0xD2: { mnemonic: "SBCB", length: 2, addressingMode: direct, format: `SBCB     ${operand}` },
  0xE2: { mnemonic: "SBCB", length: 2, addressingMode: indexed, format: `SBCB     ${operand}` },
  0xF2: { mnemonic: "SBCB", length: 3, addressingMode: extended, format: `SBCB     ${operand}` },
  0x1D: { mnemonic: "SEX", length: 1, addressingMode: inherent, format: `SEX` },
  0x97: { mnemonic: "STA", length: 2, addressingMode: direct, format: `STA     ${operand}` },
  0xA7: { mnemonic: "STA", length: 2, addressingMode: indexed, format: `STA     ${operand}` },
  0xB7: { mnemonic: "STA", length: 3, addressingMode: extended, format: `STA     ${operand}` },
  0xD7: { mnemonic: "STB", length: 2, addressingMode: direct, format: `STB     ${operand}` },
  0xE7: { mnemonic: "STB", length: 2, addressingMode: indexed, format: `STB     ${operand}` },
  0xF7: { mnemonic: "STB", length: 3, addressingMode: extended, format: `STB     ${operand}` },
  0xDD: { mnemonic: "STD", length: 2, addressingMode: direct, format: `STD     ${operand}` },
  0xED: { mnemonic: "STD", length: 2, addressingMode: indexed, format: `STD     ${operand}` },
  0xFD: { mnemonic: "STD", length: 3, addressingMode: extended, format: `STD     ${operand}` },
  0x10DF: { mnemonic: "STS", length: 3, addressingMode: direct, format: `STS     ${operand}` },
  0x10EF: { mnemonic: "STS", length: 3, addressingMode: indexed, format: `STS     ${operand}` },
  0x10FF: { mnemonic: "STS", length: 4, addressingMode: extended, format: `STS     ${operand}` },
  0xDF: { mnemonic: "STU", length: 2, addressingMode: direct, format: `STU     ${operand}` },
  0xEF: { mnemonic: "STU", length: 2, addressingMode: indexed, format: `STU     ${operand}` },
  0xFF: { mnemonic: "STU", length: 3, addressingMode: extended, format: `STU     ${operand}` },
  0x9F: { mnemonic: "STX", length: 2, addressingMode: direct, format: `STX     ${operand}` },
  0xAF: { mnemonic: "STX", length: 2, addressingMode: indexed, format: `STX     ${operand}` },
  0xBF: { mnemonic: "STX", length: 3, addressingMode: extended, format: `STX     ${operand}` },
  0x109F: { mnemonic: "STY", length: 3, addressingMode: direct, format: `STY     ${operand}` },
  0x10AF: { mnemonic: "STY", length: 3, addressingMode: indexed, format: `STY     ${operand}` },
  0x10BF: { mnemonic: "STY", length: 4, addressingMode: extended, format: `STY     ${operand}` },
  0x80: { mnemonic: "SUBA", length: 2, addressingMode: immediate, format: `SUBA     #${operand}` },
  0x90: { mnemonic: "SUBA", length: 2, addressingMode: direct, format: `SUBA     ${operand}` },
  0xA0: { mnemonic: "SUBA", length: 2, addressingMode: indexed, format: `SUBA     ${operand}` },
  0xB0: { mnemonic: "SUBA", length: 3, addressingMode: extended, format: `SUBA     ${operand}` },
  0xC0: { mnemonic: "SUBB", length: 2, addressingMode: immediate, format: `SUBB     #${operand}` },
  0xD0: { mnemonic: "SUBB", length: 2, addressingMode: direct, format: `SUBB     ${operand}` },
  0xE0: { mnemonic: "SUBB", length: 2, addressingMode: indexed, format: `SUBB     ${operand}` },
  0xF0: { mnemonic: "SUBB", length: 3, addressingMode: extended, format: `SUBB     ${operand}` },
  0x83: { mnemonic: "SUBD", length: 3, addressingMode: immediate, format: `SUBD     #${operand}` },
  0x93: { mnemonic: "SUBD", length: 2, addressingMode: direct, format: `SUBD     ${operand}` },
  0xA3: { mnemonic: "SUBD", length: 2, addressingMode: indexed, format: `SUBD     ${operand}` },
  0xB3: { mnemonic: "SUBD", length: 3, addressingMode: extended, format: `SUBD     ${operand}` },
  0x3F: { mnemonic: "SWI", length: 1, addressingMode: inherent, format: `SWI` },
  0x103F: { mnemonic: "SWI2", length: 2, addressingMode: inherent, format: `SWI2` },
  0x13: { mnemonic: "SYNC", length: 1, addressingMode: inherent, format: `SYNC` },
  0x1F: { mnemonic: "TFR", length: 2, addressingMode: immediate, format: `TFR     #${operand}` },
  0x0D: { mnemonic: "TST", length: 2, addressingMode: direct, format: `TST     ${operand}` },
  0x6D: { mnemonic: "TST", length: 2, addressingMode: indexed, format: `TST     ${operand}` },
  0x7D: { mnemonic: "TST", length: 3, addressingMode: extended, format: `TST     ${operand}` },
  0x4D: { mnemonic: "TSTA", length: 1, addressingMode: inherent, format: `TSTA` },
  0x5D: { mnemonic: "TSTB", length: 1, addressingMode: inherent, format: `TSTB` }
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