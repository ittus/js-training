<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                     <div class="form-group">
                        <label for="fullname">Full name</label>
                        <input
                                type="text"
                                id="fullname"
                                class="form-control"
                                v-model="userData.fullName">
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                        {{ userData.password }}
                    </div>
                     <div class="form-group">
                        <label for="rememberpassword">
                            <input
                                    type="checkbox"
                                    id="rememberpassword"
                                    value="remmberPass"
                                    v-model="remmberPassWord"> Remember password
                        </label>
                    </div>
                    <hr>
                    <div class="form-group">
                       <button class="btn btn-primary" @click.prevent="submitAction">Submit</button>
                    </div>
                   
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ remmberPassWord }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    password: ''
                },
                remmberPassWord: [],
                isSubmitted: false
            }
        },
        methods: {
            submitAction() {
                this.isSubmitted = true
            }
        }
    }
</script>

<style>
</style>
