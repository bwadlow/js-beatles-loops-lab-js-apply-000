function theBeatlesPlay (band, instr) {
  let arr=[]
<<<<<<< HEAD
  for (let i=0; i<band.length; i++){
    arr.push(band[i] + " plays " + instr[i])
  }
  return arr
}

function johnLennonFacts (facts) {
  let count=0
  let answer=[]
  while (count<facts.length) {
    answer.push(facts[count] + '!!!')
    count++
  }
  return answer
}

function iLoveTheBeatles (num) {
  let arr=[]
  let i=num
  do {
    i++
    arr.push('I love the Beatles!')
  } while (i < 15)
  return arr
=======
  for (let i=0; i<band.length-1; i++){
    arr.push(band[i] + " " + instr[i])
  }
  return arr
>>>>>>> a804ff735948038a7b4a38e917784d5dd7c14b2a
}