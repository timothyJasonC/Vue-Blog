<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
        <header class="masthead" style="background-image: url('/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ post.title }}</h1>
                            <button class="btn btn-danger" style="padding: 2px;" @click="handleDelete">Delete</button>
                            <span v-for="tag in post.tags" :key="tag" class="meta-post">
                                #{{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </article>

    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script>
import getPost from '@/composable/getPost';
import Loading from '@/components/Loading.vue'
import { projectFireStore } from '@/firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

export default {
    props: ['id'],
    components: {
        Loading
    },
    setup(props) {
        const router = useRouter()
        const { post, error, load } = getPost(props.id)
        load()

        const handleDelete = async () => {
            const postDocRef = doc(projectFireStore, 'posts', props.id);
            try {
                await deleteDoc(postDocRef);
                router.push({name: 'Home'})
            } catch (error) {
                throw new Error("Error deleting document: ", error);
            }
        }

        return { post, error, handleDelete }
    }
}
</script>