import { ref } from 'vue';
import { projectFireStore } from '@/firebase/config';
import {  doc, getDoc } from 'firebase/firestore';

const getPost = (id) => {
    const post = ref(null)

    const error = ref(null)

    const load = async () => {
        try {
            const postDocRef = doc(projectFireStore, 'posts', id);
            const docSnap = await getDoc(postDocRef);

            if (docSnap.exists()) {
                post.value = {
                    id: docSnap.id,
                    ...docSnap.data()
                };
            } else {
                error.value = 'Data not Availables'
                throw new Error('Data not Available')
            }
        } catch (error) {
            error.value = error.message
        }

    }

    return { post, error, load }
}

export default getPost
