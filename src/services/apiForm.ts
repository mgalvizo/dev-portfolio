import { FormData } from '../components/Form/Form.component';

const URL =
    'https://portfolio-app-826c9-default-rtdb.firebaseio.com/messages.json';

export const createMessage = async (formData: FormData): Promise<void> => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Something went wrong when creating message');
        }

        const data = await response.json();

        return data;
    } catch (err) {
        throw new Error('Could not create message');
    }
};
