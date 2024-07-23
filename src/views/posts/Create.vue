<template>
    <div>
        <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Create new Post</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->

        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="my-5">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-floating mb-3">
                                    <input class="form-control" type="text" placeholder="Title Post" v-model="title" />
                                    <label>Title</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" placeholder="Input body post" v-model="body"
                                        style="height: 12rem"></textarea>
                                    <label>Message</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" type="text" placeholder="Input Tags" v-model="tag"
                                        @keydown.enter.prevent="handleKeyDown" />
                                    <label>Tags</label>
                                </div>
                                <br />
                                <span v-for="tag in tags" :key="tag">
                                    #{{ tag }}
                                </span>
                                <button class="btn btn-primary text-uppercase" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { projectFireStore } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';

export default {
    setup() {
        const router = useRouter()
        const title = ref("")
        const body = ref("")
        const tag = ref("")
        const tags = ref([])

        const handleKeyDown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, '')
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const postsCollectionRef = collection(projectFireStore, 'posts');

            try {
                const newPost = {
                    title: title.value,
                    body: body.value,
                    tags: tags.value
                };

                await addDoc(postsCollectionRef, newPost); 

                router.push({
                    name: 'Home'
                });

            } catch (error) {
                throw new Error("Error adding document: ", error);
            }
        }

        return { title, body, tag, tags, handleKeyDown, handleSubmit }
    }
}
</script>