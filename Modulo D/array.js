let nuns = [0,1,2,3]

console.log('Vetor sem alteração:')
console.log(nuns)

nuns.push(4)
console.log('Vetor com alterações:')
console.log(nuns)

console.log(`O vetor possui ${nuns.length} posições`)

/*
for(var x = 0; x < nuns.length; x++)
{
  console.log(nuns[x])
}
*/

for(let pos in nuns)
{
  console.log(`A posição do número ${nuns[pos]} é ${pos}`)
}