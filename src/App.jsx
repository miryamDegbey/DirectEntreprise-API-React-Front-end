    import "./App.css";

    import "./App.css";
    import { Link } from "react-router-dom";
    import axios from "axios";
    import { toast, ToastContainer } from "react-toastify";
    import { useState } from "react";
    import Input from "./Components/Input/Input";
    import Button from "./Components/Buttton/Button";
    import { useNavigate } from "react-router-dom";

    export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);

        const formData = new FormData();

        formData.set("email", email);
        formData.set("password", password);

        const response = await axios.post(
        "http://127.0.0.1:8000/api/FATE.v1.0.0/login",

        formData,
        );

        

        if (response.data.success) {
        toast.success(response.data.message);
        setisLoading(false);
        const user_id = response.data.success.id
        const token = response.data.success.token
        // console.log('Connexion réussie:', response.data.data[0].id);
        // localStorage.setItem('user_id', response.data.data[0].id);
        // const user_id = response.data.data.success.id
        localStorage.setItem('user_id', user_id)
        localStorage.setItem('token', token)
        setTimeout(function () {
            navigate("/dashboard");
        }, 2000);
        } else {
        console.log(response.data);
        toast.error("email ou mot de passe incorrect");
        // console.log("error");
        console.log(response.data);
        
        setisLoading(false);
        }
    };

    return (
        <section className="Inscription">
            
            <ToastContainer stacked />
        <div className="form_conataint">
            <div className="submit">
            <h1>Connexion</h1><br />
            <p>Renseigner vos imformation de connexion pour vous connectez</p>
            </div>

            
            <form onSubmit={handelSubmit}>
                <div>
                <Input
                    label={"Email"}
                    reference={"reference"}
                    type={"email"}
                    value={email}
                    placeHolder={"Saisir l'adresse e-mail ici..."}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                /><br />
                {/* <div>{email}</div> */}
                <Input
                    label={"Mot de passe"}
                    reference={"password"}
                    type={"password"}
                    value={password}
                    placeHolder={"Saisir votre mot de passe ici..."}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                /> <br />

                    <div>
                        <Button
                            disabled={isLoading}
                            type={"submit"}
                            text={isLoading ? "chargement ..." : "Soumettre"}
                        />
                        
                        {/* <Button type={"reset"} text={"Annuler"} /> */}
                    </div> <br />

                    <div>
                        vous n'êtes pas encore inscrit cliquer {"  "}
                        <Link to={"/inscription"}>ici</Link>
                    </div>
                </div>
                
                {/* <div>{password}</div> */}
                
            </form>
        </div>
        
        </section>
    );
    }
