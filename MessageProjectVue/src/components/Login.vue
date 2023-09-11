<template>
    <h1>Login</h1>

        <label for="username">UserName:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <button id="loginButton" v-on:click="GetLoginAccount()" type="button">Login</button>
        <a href="/Member/Register"><button type="button"> Register</button></a>
</template>
<script>
    export default {
        methods: {
            GetLoginAccount() {
                $.ajax({
                    url: "/Member/GetLoginAccount",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                        "UserName": $("#username").val(),
                        "Password": $("#password").val(),
                    }),
                    success: function (data) {
                        window.location.href="/Message/List"
                    },
                    error: function (error) {
                        console.error("Error:", error);
                    }
                })
            }
        }
    }
</script>