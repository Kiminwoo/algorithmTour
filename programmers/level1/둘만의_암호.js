function solution(strings, skip, index) {
    let answer = '';
    
    // alpahbet set 세팅 
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    // skip 값 제거 
    [...skip].forEach(s => alphabet.delete(s));
    // skip 값 제외한 배열 세팅 
    const arr = [...alphabet];
  
    for (const s of strings) {
      const idx = arr.indexOf(s) + index;
      answer += arr[idx % arr.length];
    }
  
    return answer;
  }