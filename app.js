let formfield = document.querySelectorAll('.forms input')
const [cityname,campusname,Fullname,email,cnic,dob,address,course,preference,fathername,phone,fcnic,gender,userimage]=formfield
let Card = document.querySelector('.info')
let id = document.querySelector('.card')
let succes = document.getElementById('Succees')
let Cnic = document.getElementById('authenticate')
let Simg = document.getElementById('simages')


let emptystring = /^$|^\s*$/;
let emailRegex = /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let StdData=[]
let profile;

const register=()=>{

let Datavalidate=[
    {
        input:cityname,
        regex:emptystring
    },
    {
        input:campusname,
    },
    {
        input:Fullname,
        regex:emptystring
    },
    {
        input:email,
        regex:emptystring
    },
    {
        input:cnic,
        regex:emptystring
    },
    {
        input:dob,
        regex:emptystring
    },
    {
        input:address,
        regex:emptystring
    },
    {
        input:course,
        regex:emptystring
    },
    {
        input:preference,
    },
    {
        input:fathername,
        regex:emptystring
    },
    {
        input:phone,
        regex:emptystring
    },
    {
        input:fcnic,
    },
    {
        input:gender,
        regex:emptystring
    },
    {
        input:userimage,
        regex:emptystring
    }


]
Datavalidate.forEach((values)=>{
    if(values.regex && values.regex.test(values.input.value)){
        values.input.style.border = "1px solid red"


        setTimeout(()=>{
           values.input.style.border = "1px solid #8dc63f"
           values.input.value=''
        },2000)
    }
    else{
      succes.innerText="Registered"
        const StdObj={
            "StdName":Fullname.value,
            "father" : fathername.value,
            "CNIC":cnic.value,
            "birth":dob.value,
            "gender":gender.value,
            "email":email.value,
            "city" :cityname.value ,
            "campus":campusname.value,
            "Course":course.value,
            "phone":phone.value,
            "img":profile
        
         }
         StdData.push(StdObj)
         
         localStorage.setItem("StudentData" , JSON.stringify(StdData)) 
         setTimeout(()=>{
            
         },3000)
    }
    
})



}

const uploadimg = ()=>{
    let image = userimage.files[0]

    let fileread = new FileReader()
    fileread.onload = ()=>{
        profile = fileread.result
        console.log(fileread.result)
    }
    fileread.readAsDataURL(image)}



let StudentData = JSON.parse(localStorage.getItem('StudentData'))

let search =StudentData.find((values)=>{
    return values.CNIC
})

if(search){
    console.log(typeof(search.CNIC))
}

const idcard=()=>{
    if(Cnic.value === search.CNIC){
        Cnic.style.border = "1px solid red"
        setTimeout(()=>{
            Cnic.style.border = "1px solid #000"
        },2000)
    }

    else{
        id.style.display= "block"
       Card.innerHTML = ` <h4 id="stdname"><Span>Name:</Span>${search.StdName}</h4>
                          <h4 id="stdFather"><span>Father Name:</span>${search.father}</h4>
                          <h4 id="stdclass"><span>Class:</span>${search.Course}</h4>
                          <h4 id="phone"><span>Phone:</span>${search.phone}</h4>`
        Simg.src = search.img
    }

}
