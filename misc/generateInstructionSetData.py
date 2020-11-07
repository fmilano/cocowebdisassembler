#!/usr/bin/env python3

# Generates a json from instruction set csv scrapped from:
# https://www.8bitcoder.com/mnemonics/mnemonics.php?mnemonic= 

import csv

# maps the addressing mode to the CSV table index
modes = {
    'imm': 2,
    'dir': 5,
    'idx': 8,
    'ext': 11,
    'inh': 14,
    'rel': 17,
    'reg': 20,
    'mem': 23    
}

with open('6x09_instruction_set.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        is6809 = row[0] != "*"
        # skips the title and subtitle rows
        if line_count >= 2 and is6809:
            mnemonic = row[1]
            for mode in modes:
                index = modes[mode]
                opcode = row[index]
                length = row[index+2]

                if opcode:
                    print(f'{opcode}: {{ mnemonic: \"{mnemonic}\", length: {length} }},')

        line_count += 1
