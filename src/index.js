import ReactDom from "react-dom";
import React from 'react';
import './index.css';

//always capital leetter for function name
//always return something JSX(in function)


function BookList() {
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return ( 
    <article className="book">
     <Image/>
     <Author/>
     <Title></Title>
    </article>
  );
};

const Image = () => {
  return( 
    <div>
      <img src='https://images-eu.ssl-images-amazon.com/images/I/61r2osjrwmL._AC_SX184_.jpg' alt='img1' />
      </div>
  );
  
};

const Title = () => <h1>the waht found</h1>;
const Author = () => <h2>annelia</h2>;


ReactDom.render(<BookList/>, document.getElementById('root'));

//JSX rules
//return in single element like in only enclosed in one div
//div/section/article/fragment
//React.fragment can be used as well
//use camelcase for html attribute
//className in palce of class
//close every element
//formating


//const Fun = ()=>{
  //return React.createElement('h1',{},'hello world');
//}