const errorHandling = (error) => {
    
    if(!error.response || !error.response.data) {
        return { status: 500, message: "Ocorreu um erro no servidor. Tente novamente." };
    }
    if(error.response.data.status === 401){
        return { status: 401, message: "Você não tem autorização para acessar esses dados" };
    }
    const _errors = error.response.data.errors;
    if(_errors && typeof _errors === "string") return { status: 400, message: _errors };
    
   
}

export default errorHandling;