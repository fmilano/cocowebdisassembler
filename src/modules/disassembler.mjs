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


  for (let i = 0; i < input.byteLength; ++i) {

  }

}; 