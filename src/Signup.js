import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import './Signup.css'
export default function Signup() {

    const [list, setlist] = useState([])
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [verify, setverify] = useState('')
    const [email, setemail] = useState('')
    const [tech, settech] = useState([])
    const [boolean, setboolean] = useState(false)
    const navi = useNavigate()
    function check() { 
        if (name===''){
            alert('please enter name')
            setboolean(false)
        }
        else if (name.length<5 || name.length>15){
            alert('Name should be greater then 5 ')
            setboolean(false)
        }
        else if(password===''){
            alert('Please enter password')
            setboolean(false)
        } 
        else if(verify!==password){
            alert('confirm password should be same')
            setboolean(false)
        }
        else if (email===''){
            alert('Email is empty')
        }
        else if (!email.includes('@gmail.com')){
            alert('Email should be gmail format')
        }
        else if (name!=='' && password!==''&& verify!=='' && email!=='' && (verify===password)) {
            navi('/dashboard')
        }      
    }
    return (
        <div id='box'>       
            <center>
            <form>
                <center>                 
                    <h3>SIGNUP FORM</h3></center>
                <table>
                    <tr>
                        <td> USERNAME</td>
                        <td>
                            <input type='text' placeholder="enter your name" onChange={(user) => [
                                setname(user.target.value)
                            ]}></input>
                            
                        </td></tr>
                    <tr>
                        <td>PASSWORD</td>
                        <td>
                            <input type='password' placeholder='enter password' onChange={(pass) => [
                                setpassword(pass.target.value)
                            ]}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>VERIFY PASSWORD </td>
                        <td>
                            <input type='password' placeholder="enter password" onChange={(verify) => [
                                setverify(verify.target.value)
                            ]}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>EMAIL</td>
                        <td>
                            <input type='email' placeholder="enter your email Id" onChange={(email) => [
                                setemail(email.target.value)
                            ]}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>TECHNOLOGY</td>
                        <td>
                            <select >
                                <option>JAVASCRIPT</option>
                                <option>JAVA</option>
                                <option>PYTHON</option>
                                <option>C++</option>
                            </select>
                        </td>
                    </tr>
                </table>              
                <center><button onClick={() => {              
                    check()
                    {boolean? navi('/dashboard'):<Signup/>}
                } }>SUBMIT</button></center>
                </form>
            </center>
        </div>
    )
}

{/* <data.Provider value={list}>
                    <Dashboard/>
                </data.Provider>
    let temp = {
        'name1': name,
        'password1': password,
        'verify1': verify,
        'email1': email,
        'tech1': tech
    }
    setlist([...list, temp])
    // console.log(list) */}