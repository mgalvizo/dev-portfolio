import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createMessage as createMessageApi } from '../services/apiForm';

export const useCreateMessage = () => {
    const { isLoading: isSending, mutate: sendMessage } = useMutation({
        mutationFn: createMessageApi,
        onSuccess: () => {
            toast.success('Message successfully sent');
        },
        onError: (err: Error) => toast.error(err.message),
    });

    return { isSending, sendMessage };
};
