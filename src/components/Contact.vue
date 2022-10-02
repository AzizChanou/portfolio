<script setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';

const form = ref(null);

const sendMail = () => {

    emailjs.sendForm(import.meta.env.VITE_MAIL_SERVICE_ID, import.meta.env.VITE_MAIL_TEMPLATE_ID, form.value,
        import.meta.env.VITE_MAIL_PUBLIC_KEY)
        .then((result) => {
            alert('Mail envoyé !');
        }, (error) => {
            alert('Mail non envoyé, réessayer !');
        });

}

</script>

<template>
    <div class="space-y-8 w-full max-w-screen-md">
        <h3 class="text-center text-3xl font-semibold">Contactez-moi</h3>
        <form ref="form" @submit.prevent="sendMail" class="space-y-4 w-full">
            <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-4 w-full">
                <div class="w-full mt-3">
                    <label for="fullname" class="font-semibold text-lg">Nom & prénom.s</label>
                    <input name="name" id="fullname" type="text"
                        class="dark:bg-secondary bg-gray-200 rounded w-full p-4 mt-2" required>
                </div>
                <div class="w-full mt-3">
                    <label for="email" class="font-semibold text-lg">Email</label>
                    <input name="email" id="email" type="email"
                        class="dark:bg-secondary bg-gray-200 rounded w-full p-4 mt-2" required>
                </div>
            </div>
            <div class="w-full mt-3">
                <label for="message" class="font-semibold text-lg">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"
                    class="dark:bg-secondary bg-gray-200 rounded w-full p-4 mt-2" required></textarea>
            </div>
            <button type="submit"
                class="font-semibold p-3 text-white text-xl w-full rounded bg-blue-800 hover:bg-blue-900 duration-300">Envoyer</button>
        </form>
    </div>
</template>