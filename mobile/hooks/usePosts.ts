import { postApi, useApiClient } from "@/utils/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


export const usePosts = ()=>{
    const api = useApiClient()
    const queryClient = useQueryClient()


    const {
        data:postsData,
        isLoading,
        error,
        refetch
    } = useQuery({
        queryKey:["posts"],
        queryFn:()=>postApi.getPosts(api),
        select:(response) => response.data.posts,
    })

    const likePostMutation = useMutation({
        mutationFn:(postId:string) => postApi.likePost(api,postId),
        onSuccess:()=> queryClient.invalidateQueries({queryKey:["posts"]})
    })

    const deleteMutation = useMutation({
        mutationFn:(postId:string)=>postApi.deletePost(api,postId),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["posts"]})
            queryClient.invalidateQueries({queryKey:["userPosts"]})
        },
        onError:(error)=>console.log(error.message)
    })

    const checkIsLiked = (postLikes:string[],currentUser:any)=>{
        const isLiked = currentUser && postLikes.includes(currentUser._id)
        return isLiked
    }

    return{
        posts:postsData || [],
        isLoading,
        error,
        refetch,
        toggleLike: (postId:string) => likePostMutation.mutate(postId),
        deletePost: (postId:string) => deleteMutation.mutate(postId),
        checkIsLiked
    }
}