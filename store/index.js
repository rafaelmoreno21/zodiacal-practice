import Vue from 'vue';



export const state = () => ({
    
      signos: [
        "Aries",
        "Tauro",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagitario",
        "Capricornio",
        "Acuario",
        "Piscis"
      ],
    
      name: "",
      
      

      signo:"",
      date: "",
      
    
    
  })


  export const mutations ={

    submitData(state,{name,signo,date}){

      state.name=name
      state.signo=signo
      state.date=date
      

    },

    submitData2(state,payload){

      state.name=payload


    }

    


    }
    
      



      


    



  
  