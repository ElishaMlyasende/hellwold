import React, { useEffect, useState } from 'react';
import { View,FlatList, Image, Alert,Text, TextInput, Button, StyleSheet } from 'react-native';

const About = ({route}) => {
    const {data}= route.params;
    const {body}=route.params;
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  
  const [error, seterror] = useState({});
  const[listdata, setlistdata]=useState([]);
  const[isposting, setisposting]= useState(false);

  const validation = () => {
    let error = {};
    if (!username) error.username = "Username is required";
    if (!password) error.password = "Password is required";
    
    seterror(error);
    return Object.keys(error).length === 0;
  };
  const handlesubmission=async()=>{
    

    if(validation()){
      setisposting(true)
     
        const rensponse1=await fetch('https://jsonplaceholder.typicode.com/posts',
        {
          method:"post",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({
            title:username,
            body:password
          })
          });
          const newpost= await rensponse1.json();
          setlistdata([newpost, ...listdata]);
          setpassword('');
            

        
        
      

    }
  };
  const fetchdata=async()=>{
    const rensponse= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1');
    const data= await rensponse.json();
    setlistdata(data);
  };

  useEffect (()=>{
    fetchdata();

  },[]);

  return (
    
    <View style={styles.container}>
      <View style={styles.form}>
        
        
        <Text> {JSON.stringify(data)}</Text>
      
        
         
          <FlatList
          data={listdata}
          
          renderItem={({item})=>{
            return(
              <View style={styles.form}>
                <Text style={styles.label}>{item.title}</Text>
                <Text style={styles.label}>{item.body}</Text>
                <Text style={styles.label}>{JSON.stringify(data)}</Text>
                
                </View>
            )

          }}/>
      </View>
      
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    padding: 20, // numeric value without quotes
  },
  form: { 
    backgroundColor: 'white',
    borderRadius:10,
    padding: 20, // numeric value without quotes
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black', // color value
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevetion:5,
    
  },
  label: {
    
    fontSize: 12,
    fontWeight: 'bold',
    color:'black'
  },
  input: {
    
    padding:10,// numeric value without quotes
    height:40,
    borderRadius:5,
    borderColor:'#ddd',
    marginBottom:5,
    backgroundColor:'gray'


  },
  errors: {
    color: 'red',
    fontSize: 12,
  },
  button:{
    backgroundColor:'green',
    width:100
  },
  header:{
    fontSize:16,
    color:'black',
    justifyContent:'center',
    paddingTop:5,
    marginTop:5,
    marginBottom:8,
    fontWeight:'bold'

  }
});

export default About;