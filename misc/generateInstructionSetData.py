#!/usr/bin/env python3

# Generates a json from instruction set csv scrapped from:
# https://www.8bitcoder.com/mnemonics/mnemonics.php?mnemonic= 

import csv

# maps the addressing mode to the CSV table index
addressingModes = {
    'immediate': 2,
    'direct': 5,
    'indexed': 8,
    'extended': 11,
    'inherent': 14,
    'relative': 17,
    'register': 20
    #'memory': 23    
}

with open('6x09_instruction_set.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        is6809 = row[0] != "*"
        # skips the title and subtitle rows
        if line_count >= 2 and is6809:
            mnemonic = row[1]
            for addressingMode in addressingModes:
                index = addressingModes[addressingMode]
                opcode = row[index]
                length = row[index+2]

                formatTemplate = "``"
                if addressingMode == 'inherent':
                    formatTemplate = f"`{mnemonic}`"
                elif addressingMode == 'immediate':
                    formatTemplate = f"`{mnemonic}     #${{operand}}`"
                else:
                    formatTemplate = f"`{mnemonic}     ${{operand}}`"
           
                if opcode:
                    print(f'0x{opcode}: {{ mnemonic: \"{mnemonic}\", length: {length[0]}, addressingMode: {addressingMode}, format: {formatTemplate} }},')

        line_count += 1
