export default  function validator(values){

    const errors = {};
    if (!values.Last_Name){
        errors.Last_Name ='Required'
    }
    if (!values.Phone){

        errors.Phone ='Required'
    }
    if (!values.Email) {
        errors.Email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address';
    }



    return errors;
}