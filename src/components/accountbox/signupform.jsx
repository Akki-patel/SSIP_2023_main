import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink, InputWrapper, EyeIcon } from "./comon";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
export function Signupform(props) {
    const { switchToSignin } = useContext(AccountContext);
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleToggle = () => {
        setShowPassword(!showPassword);
        if (type === "password") {
            setIcon(eye);
            setType("text");
        }
        else {
            setIcon(eyeOff);
            setType("password");
        }
    }
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setInputValue(newPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your submit logic here...

        // Clear the input fields
        setPassword("");
        setInputValue("");
    };
    return <BoxContainer>
        <FormContainer onSubmit={handleSubmit}>
            <Input type="text" placeholder="Full name" />
            <Input type="email" placeholder="Email" />
            <InputWrapper>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    // onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                {password && ( // Only render the EyeIcon when there's input in the password field
                    <EyeIcon onClick={handleToggle}>
                        <Icon icon={icon} size={15} />
                    </EyeIcon>
                )}
            </InputWrapper>
            <Input type="password" placeholder="Confirm password" />
        </FormContainer>
        <Marginer direction="vertical" margin="1.3em" />
        <SubmitButton type="submit" onClick={handleSubmit}>Register</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Already have an account?<BoldLink href="#" onClick={switchToSignin}>Sign-in</BoldLink></MutedLink>
    </BoxContainer>
}