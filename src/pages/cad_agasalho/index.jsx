import React from "react";
import { FormCadastro, TextFieldCustom, BackCad } from "./style";

import { FormControl, TextField } from '@mui/material';
import { FormCad } from "./style";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextBoxArea from "../../components/TextBox";

import MenuTop from "../../components/Menu";
import {  TitleSite, TitleTop } from "./style";

export default function Cadastro() {
    return (
        <>
        <TitleTop>
            <TitleSite>Coleta Solidaria</TitleSite> 
            <MenuTop />
        </TitleTop>

        <BackCad>
            <FormCadastro>
                <FormCad>
                <FormControl>
                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <TextFieldCustom  color="success" widthprops="800px"  id="nameInstuty" label="Nome da Instituição" variant="filled"  />
                    </Form.Group>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <TextFieldCustom  color="success" widthprops="250px"  id="nameInstuty" label="CEP" variant="filled"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <TextFieldCustom  color="success" widthprops="250px"  id="nameInstuty" label="Estado" variant="filled"  />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <TextFieldCustom  color="success" widthprops="250px"  id="nameInstuty" label="Cidade" variant="filled"  />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <TextFieldCustom  color="success" widthprops="522px"  id="nameInstuty" label="Rua" variant="filled"  /> 
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} controlId="formGridNumber">
                            <TextFieldCustom  color="success" widthprops="250px"  id="nameInstuty" label="Numero" variant="filled"  />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <TextFieldCustom  color="success" widthprops="800px"  id="nameInstuty" label="EMAIL" variant="filled"  />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <TextFieldCustom  color="success" widthprops="800px"  id="nameInstuty" label="SENHA" variant="filled"  />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <TextFieldCustom  color="success" widthprops="800px"  id="nameInstuty" label="SENHA" variant="filled"  />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        ENVIAR
                    </Button>
                    </Form>

                </FormControl>             
                </FormCad>
            </FormCadastro>
            
        </BackCad>
        </>
    )
}