<template>
  <v-container pa-0 ma-0 fluid>
    <v-layout align-center justify-center text-center>

      <v-row>
      <v-card min-width="auto" width="100%" max-width="auto" height="20rem" dark color="indigo"> <v-layout class="flex-wrap" justify-center="" align-center="" >
        <v-card-title> <h2 class="tituloh flex-nowrap">Bem vindos a Diorama! </h2></v-card-title>
      
     <v-card-text> <p class="textop">Escola on-line que fornece os melhores cursos sobre design, programação e suas diversas variações, venha conhecer nossos cursos!</p> 
             <v-btn min-height="100%" max-height="auto">Clique aqui para conhecer</v-btn>   

      </v-card-text>
</v-layout>  
      
    </v-card>
</v-row>


    </v-layout>



  <v-row align="center" justify="center" class="spacer">
    <v-carousel cycle height="20rem" interval="9000" hide-delimiters> 

    <v-carousel-item>  <v-img height="100%" min-height="100%" src="../assets/firstimg.png">
               <v-row align="center" justify="center"><v-card-title> Produto 1 </v-card-title> 
               <v-card-text class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
                  <v-card-title class="align-center justify-center fill-height flex-wrap"><v-btn>Clique aqui para conhecer o curso</v-btn></v-card-title>

                   </v-row> 

                      </v-img>  
    </v-carousel-item>


<v-carousel-item>  <v-img height="100%" min-height="100%" src="../assets/firstimg.png">
               <v-row align="center" justify="center"><v-card-title> Produto 2 </v-card-title> 
               <v-card-text class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
                 <v-card-title class="align-center justify-center fill-height flex-wrap"><v-btn>Clique aqui para conhecer o curso</v-btn></v-card-title>

                   </v-row> 

                      </v-img>  
    </v-carousel-item>


    <v-carousel-item>  <v-img height="100%" min-height="100%" src="../assets/firstimg.png">
               <v-row align="center" justify="center"><v-card-title> Produto 3 </v-card-title> 
               <v-card-text class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
                   <v-card-title class="align-center justify-center fill-height flex-wrap"><v-btn>Clique aqui para conhecer o curso</v-btn></v-card-title>

                   </v-row> 

                      </v-img>  
    </v-carousel-item>


    <v-carousel-item>  <v-img height="100%" min-height="100%" src="../assets/firstimg.png">
               <v-row align="center" justify="center"><v-card-title> Produto 4 </v-card-title> 
               <v-card-text class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
                   <v-card-title class="align-center justify-center fill-height flex-wrap" ><v-btn>Clique aqui para conhecer o curso</v-btn></v-card-title>

                   </v-row> 

                      </v-img>  
    </v-carousel-item>
      

    </v-carousel>
    </v-row>


<v-row dense="" pa-0 ma-0 fill-height>  
    
  
     <v-col sm="12" md="2"><a href="#"><v-card><v-img src="../assets/css.jpg"></v-img>
     <v-card-title class="align-center justify-center fill-height">Curso 1
     </v-card-title>      
    <v-card-text>Descrição breve do curso</v-card-text></v-card></a>    </v-col>


     <v-col sm="12" md="2"><a href="#"><v-card><v-img src="../assets/webcurso.jpg"></v-img>
     <v-card-title class="align-center justify-center fill-height">Curso 2
     </v-card-title>      
    <v-card-text>Descrição breve do curso</v-card-text></v-card></a></v-col>

 <v-col sm="12" md="2"><a href="#"><v-card><v-img src="../assets/webcurso.jpg"></v-img>
     <v-card-title class="align-center justify-center fill-height">Curso 3
     </v-card-title>      
    <v-card-text>Descrição breve do curso</v-card-text></v-card></a></v-col>




  <v-col sm="12" md="2"><a href="#"><v-card><v-img src="../assets/css.jpg"></v-img>
     <v-card-title class="align-center justify-center fill-height">Curso 4
     </v-card-title>      
    <v-card-text>Descrição breve do curso</v-card-text></v-card></a>    </v-col>

    
     <v-col sm="12" md="2"><a href="#"><v-card><v-img src="../assets/csharp.jpg"></v-img>
     <v-card-title class="align-center justify-center fill-height">Curso 5
     </v-card-title>      
    <v-card-text>Descrição breve do curso</v-card-text></v-card></a></v-col>

     <v-col sm="12" md="2"><a href="#"><v-card><v-img src="../assets/javascript.jpg"></v-img>
     <v-card-title class="align-center justify-center fill-height">Curso 5
     </v-card-title>      
    <v-card-text>Descrição breve do curso</v-card-text></v-card></a></v-col>





</v-row>


  </v-container>
</template>

<script>


export default {

}
</script>


<style>

.textop{
  font-size: 1.5rem;
}

.tituloh{
  font-size: 3rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.spacer {
  margin-top: 0.5rem;
}

a{
  text-decoration: none;
}

.hoverz a:hover{
    background:cyan;
    border-top: 5px solid blue;
}


  </style>