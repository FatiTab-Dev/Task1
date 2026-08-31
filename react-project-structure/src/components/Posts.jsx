import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
export function Posts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2 text-muted">Loading posts...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        Error loading posts: {error.message}
      </div>
    );
  }
  return (
    <div className="container my-4">
      <h2 className="mb-4 font-bold text-2xl text-dark">Posts Feed</h2>
      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-md border-0 p-2">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h6 font-wheight-bold text-info mb-2">
                  {post.title}
                </h3>
                <p className="card-text text-muted small flex-grow-1">
                  {post.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
