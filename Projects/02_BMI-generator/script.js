const form = document.querySelector("form")
form.addEventListener('submit', (e)=>{
e.preventDefault();

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const results = document.querySelector("#results")

    if(height=== '' || height <0 || isNaN(height)){
        results.innerHTML = `Enter the correct height, your input ${height}`
    }else if(weight=== '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Enter the correct weight, your input ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            results.innerHTML = `<span>${bmi} is Under Weight</span>`
        }else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML = `<span>${bmi} in Normal Range</span>`
        }else{
            results.innerHTML = `<span>${bmi} is Overweight</span>`   
        }
        
    }
    
})