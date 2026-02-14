import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: false
})
export class RegisterComponent {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.registerForm.valid) {
            if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
                console.error('Passwords do not match');
                // Ideally set an error on the form control or form group
                return;
            }
            console.log('Register Form Data:', this.registerForm.value);
        } else {
            console.log('Form is invalid');
            this.registerForm.markAllAsTouched();
        }
    }
}
