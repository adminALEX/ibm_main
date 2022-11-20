// function jobs(n){
//     let text = document.getElementsByClassName('card-title');
//     console.log(text);
//     let text1 = text[n].innerHTML;
//     console.log(text1);
//     ajax({
//         url: 'apply',
//         type: 'POST',
//         data: {
//             job: text1
//         },
//         success: function (response) {
//             response = JSON.parse(response);
//         },
//         error: function (response) {
//         }
//     });
// }

function jobs(n){
    let text = document.getElementsByClassName('card-title');
    console.log(text);
    let text1 = text[n].innerHTML;
    window.location.replace("/apply/"+text1);
} 
