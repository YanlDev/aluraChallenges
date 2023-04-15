const textArea = document.getElementById('text-area');
const btnEncryptor = document.getElementById('btn-encryptor');
const btnDecryptor = document.getElementById('btn-decryptor');
const resultArea = document.getElementById('result-area');
const btnCopy = document.getElementById('btn-copy');
const hideDiv = document.getElementById('hide');

// encrypt
btnEncryptor.addEventListener('click',(e)=>{
  e.preventDefault();
  const textValue = textArea.value.toLowerCase();
  let textEncrypted = encrytor(textValue);
  printResults(textEncrypted);
  textArea.value = '';
  console.log('a')
});

// copy text
btnCopy.addEventListener('click',(e)=>{
  e.preventDefault();
  let textToCopy = resultArea.value;
  navigator.clipboard.writeText(textToCopy)
  .then(()=>{
    console.log('Text copied to clipboard')
  })
  .catch(err => {
    console.error('Error in copying text: ', err);
  });
  resultArea.textContent = '';
  toggleHideDiv()
});

// decrypt
btnDecryptor.addEventListener('click',(e)=>{
  e.preventDefault();
  const textValue = textArea.value;
  let textDecrypted = decryptor(textValue);
  printResults(textDecrypted);
  textArea.value = '';
});


// functionality
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encrytor(params) {
  let result = '';
  for (let i = 0; i< params.length; i++) {

    if(params[i]==='a'){
      result += 'ai';
    } else if(params[i]==='e'){
      result += 'enter';
    } else if(params[i]==='i'){
      result += 'imes';
    } else if(params[i]==='o'){
      result += 'ober';
    } else if(params[i]==='u'){
      result += 'ufat';
    } else{
      result += params[i];
    };
  };
  return result;
}

function decryptor(params) {
  let result = '';
  for (let i = 0; i < params.length; i++) {
    if (params[i]==='a') {
      result += 'a';
      i += 1;
    } else if (params[i]=== 'o') {
      result += 'o';
      i += 3;
    } else if (params[i]=== 'e') {
      result += 'e';
      i += 4;
    } else if (params[i]=== 'i') {
      result += 'i';
      i += 3;
    } else if (params[i]=== 'u') {
      result += 'u';
      i += 3;
    }

    else{
      result += params[i];
    }
  }
  return result;
}

function printResults(params) {
  resultArea.textContent = params
  toggleHideDiv();
}

function toggleHideDiv() {
  if (resultArea.textContent === '') {
    hideDiv.style.display = 'block'; // Mostrar el div si no hay contenido en el área de resultados
  } else {
    hideDiv.style.display = 'none'; // Ocultar el div si hay contenido en el área de resultados
  }
}























// function dechiper(text){
//     let index = 0
//     let result = ''
//     while(index < text.length){
//         const char = text[index]
//         const valueToReplace = aluraDict[char]

//         if(!valueToReplace){
//             index++
//         }else{
//              const maybeToReplace = text
//                 .substring(index, index + valueToReplace.length)
        
//             if(maybeToReplace === valueToReplace){
//                 index += valueToReplace.length
              
//             }else {
//                 index++
//             }
//         }
        
//         result += char
//     }

//     return result
// }