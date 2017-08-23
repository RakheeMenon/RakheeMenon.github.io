import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidators{


    static validOldPassword(control:AbstractControl):ValidationErrors|null{
    return new Promise((resolve)=>{
        if(control.value !== 'rakhee1234')
            resolve({invalidOldPassword:true});
        else
            resolve(null);

    })

    }

    static passwordMustMatch(control:AbstractControl){

        let newPassword=control.get('newPassword');
        let confirmPassword=control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return {passwordMustMatch:true};
        return null;
    }

}