import { ref } from 'vue';
import { projectFireStore } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const getPosts = () => {
    const posts = ref(null)

    const error = ref(null)
    const load = async () => {
        try {
            const postsCollectionRef = collection(projectFireStore, 'posts')
            const querySnapshot = await getDocs(postsCollectionRef);

            const data = querySnapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            }));

            posts.value = data
        } catch (error) {
            error.value = error.message
        }

    }

    return { posts, error, load }
}

export default getPosts
