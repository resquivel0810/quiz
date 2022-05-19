import styles from "./QuizContainer.module.css";
import React, { useState } from "react";


const quiz={
    "id":1,
    "name": "Física aleatoria",
    "comments": [
        "Un segundo es la duración de 9 192 631 770 oscilaciones de la radiación emitida en la transición entre los dos niveles hiperfinos del estado fundamental del isótopo 133 del átomo de cesio (133Cs), a una temperatura de 0 K",
        
    ],
       
    "questions": [
        {
            "el estándar del tiempo está basado en" :
            {
                "La rotación diaria de la Tierra": false,
                "La frecuencia de luz emitida por Kr-86": false,
                "La revolución anual de la Tierra con respecto al Sol": false,
                "un reloj pensular de precisión": false,
                "ninguna de estas": true
            },
  
        },
        {
            "En un líquido homogéneo estacionario" :
            {
                "La presión es la misma en todos los puntos": false,
                "La presión depende de la dirección": false,
                "La presión es independiente de cualquier presión atmosférica en la superficie superior del líquido": false,
                "La presión es la misma en todos los puntos al mismo nivel": true,
                "ninguna de estas": false
             }
  
        },
        {
            "La aceleración es definida como" :
            {
                "La tasa de cambio de posición con el tiempo": false,
                "rapidez dividida sobre el tiempo": false,
                "La tasa de cambio de la velocidad con el tiempo": true,
                "Un aumento o disminución de la rapidez": false,
                "Cambio de la velocidad": false
            }
  
        },
        {
            "Cuál de la siguientes es una cantidad vectorial" :
            {
                "Masa": false,
                "Densidad": false,
                "Rapidez": false,
                "Temperatura": false,
                "Ninguna de estas": true
             }
  
        },
        {
            "Un ejemplo de un sistema de referecnia inercial es:" :
            {
                "Cualquier sistema de referencia que no está acelerando": false,
                "Un sistema de referencia unido a un partícula sobre la cual ninguna fuerza actúa": true,
                "Cualquier marco de referencia que está en reposo": false,
                "Un sistema de referencia unido al centro del universo": false,
                "Un sistema de referencia unido a la Tierra": false
             }
  
        },
    ]
}

const QuizContainer = () => {
    let options = quiz.questions
    const [grade, setGrade] = useState(0/options.length)
    
    
    console.log(options)


    
    
    return <>
        <h1 className={styles.quizTitle}>{quiz.name}</h1>
        <div>
            {
                options.map( (question) =>  {
                    let questionData = []
                    for (const key in question){
                        questionData.push(
                            question[key]
                        );
                    }
                    
                    // let index = 0
                    // index ++
                    return (
                    <>
                    <h2></h2>
                    {   
                        
                        questionData.map( answer => 
                            <>
                            <fieldset className={styles.question} id={Object.keys(question)}>
                                <legend>{Object.keys(question)}</legend>
                                <div className={styles.answerContainer}>
                                    <input 
                                        onClick={() => {
                                            let selectedValue = document.getElementById(Object.keys(question)+Object.keys(answer)[0]).value
                                            console.log(selectedValue)
                                            if (selectedValue === 'true') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[0]).style.backgroundColor = '#8AE833'
                                                setGrade(grade+1/options.length)
                                            } else if (selectedValue === 'false') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[0]).style.backgroundColor = '#FF84A6'
                                                document.getElementsByName(Object.keys(question)).forEach(e => {if(e.defaultValue === 'true'){e.nextSibling.style.backgroundColor = '#8AE833'}})
                                            }
                                            document.getElementById(Object.keys(question)).disabled = true;
                                        }} 
                                        type="radio" 
                                        name={Object.keys(question)} 
                                        id={Object.keys(question)+Object.keys(answer)[0]} 
                                        value={Object.values(answer)[0]}
                                    />
                                    <label id={'label'+Object.keys(question)+Object.keys(answer)[0]} for={Object.keys(question)+Object.keys(answer)[0]}>{Object.keys(answer)[0]}</label>
                                </div>
                                <div className={styles.answerContainer}>
                                    <input 
                                        onClick={() => {
                                            let selectedValue = document.getElementById(Object.keys(question)+Object.keys(answer)[1]).value
                                            console.log(selectedValue)
                                            if (selectedValue === 'true') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[1]).style.backgroundColor = '#8AE833'
                                                setGrade(grade+1/options.length)
                                            } else if (selectedValue === 'false') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[1]).style.backgroundColor = '#FF84A6'
                                                document.getElementsByName(Object.keys(question)).forEach(e => {if(e.defaultValue === 'true'){e.nextSibling.style.backgroundColor = '#8AE833'}})
                                            }
                                            document.getElementById(Object.keys(question)).disabled = true;
                                        }} 
                                        type="radio" 
                                        name={Object.keys(question)} 
                                        id={Object.keys(question)+Object.keys(answer)[1]} 
                                        value={Object.values(answer)[1]} 
                                    />
                                    <label id={'label'+Object.keys(question)+Object.keys(answer)[1]} for={Object.keys(question)+Object.keys(answer)[1]}>{Object.keys(answer)[1]}</label>
                                </div>
                                <div className={styles.answerContainer}>
                                    <input 
                                        onClick={() => {
                                            let selectedValue = document.getElementById(Object.keys(question)+Object.keys(answer)[2]).value
                                            console.log(selectedValue)
                                            if (selectedValue === 'true') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[2]).style.backgroundColor = '#8AE833'
                                                setGrade(grade+1/options.length)
                                            } else if (selectedValue === 'false') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[2]).style.backgroundColor = '#FF84A6'
                                                document.getElementsByName(Object.keys(question)).forEach(e => {if(e.defaultValue === 'true'){e.nextSibling.style.backgroundColor = '#8AE833'}})
                                            }
                                            document.getElementById(Object.keys(question)).disabled = true;
                                        }} 
                                        type="radio" 
                                        name={Object.keys(question)} 
                                        id={Object.keys(question)+Object.keys(answer)[2]} 
                                        value={Object.values(answer)[2]} 
                                    />
                                    <label id={'label'+Object.keys(question)+Object.keys(answer)[2]} for={Object.keys(question)+Object.keys(answer)[2]}>{Object.keys(answer)[2]}</label>
                                </div>
                                <div className={styles.answerContainer}>
                                    <input 
                                        onClick={() => {
                                            let selectedValue = document.getElementById(Object.keys(question)+Object.keys(answer)[3]).value
                                            console.log(selectedValue)
                                            if (selectedValue === 'true') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[3]).style.backgroundColor = '#8AE833'
                                                setGrade(grade+1/options.length)
                                            } else if (selectedValue === 'false') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[3]).style.backgroundColor = '#FF84A6'
                                                document.getElementsByName(Object.keys(question)).forEach(e => {if(e.defaultValue === 'true'){e.nextSibling.style.backgroundColor = '#8AE833'}})
                                            }
                                            document.getElementById(Object.keys(question)).disabled = true;
                                        }} 
                                        type="radio" 
                                        name={Object.keys(question)} 
                                        id={Object.keys(question)+Object.keys(answer)[3]} 
                                        value={Object.values(answer)[3]} 
                                    />
                                    <label id={'label'+Object.keys(question)+Object.keys(answer)[3]} for={Object.keys(question)+Object.keys(answer)[3]}>{Object.keys(answer)[3]}</label>
                                </div>
                                <div className={styles.answerContainer}>
                                    <input 
                                        onClick={() => {
                                            let selectedValue = document.getElementById(Object.keys(question)+Object.keys(answer)[4]).value
                                            console.log(selectedValue)
                                            if (selectedValue === 'true') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[4]).style.backgroundColor = '#8AE833'
                                                setGrade(grade+1/options.length)
                                            } else if (selectedValue === 'false') {
                                                document.getElementById('label'+Object.keys(question)+Object.keys(answer)[4]).style.backgroundColor = '#FF84A6'
                                                document.getElementsByName(Object.keys(question)).forEach(e => {if(e.defaultValue === 'true'){e.nextSibling.style.backgroundColor = '#8AE833'}})
                                            }
                                            document.getElementById(Object.keys(question)).disabled = true;
                                        }} 
                                        type="radio" 
                                        name={Object.keys(question)} 
                                        id={Object.keys(question)+Object.keys(answer)[4]} 
                                        value={Object.values(answer)[4]} 
                                    />
                                    <label id={'label'+Object.keys(question)+Object.keys(answer)[4]} for={Object.keys(question)+Object.keys(answer)[4]}>{Object.keys(answer)[4]}</label>
                                </div>
                            </fieldset>
                            </>
                        )
                    }
                        
                    </>
                    )
                    
                })   
            }
        </div>
    </>;
};

export default QuizContainer;
