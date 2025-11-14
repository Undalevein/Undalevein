import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'

type Post = {
  id: string
  title: string
  content: string
  created_at: string
  image_url: string
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const fetchPosts = async () => {
    try {
      setError(null)
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      setPosts(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts')
    }
  }

  const createPost = async () => {
    try {
      setError(null)
      setLoading(true)
      const user = (await supabase.auth.getUser()).data.user
      if (!user) throw new Error('You must be logged in to create a post')
      if (!title || !content || !imageUrl) throw new Error('All fields are required')
      const { error } = await supabase.from('posts').insert({
        title,
        content,
        user_id: user.id,
        image_url: imageUrl,
      })
      if (error) throw error

      setTitle('')
      setContent('')
      fetchPosts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create post')
    } finally {
      setLoading(false)
    }
  }
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign out')
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <div className="posts-container">
	<div className="nav-links">
        <Link to="/followers" className="followers-link">View Followers</Link>
        <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
      </div>
      <div className="create-post">
        <h2>Create Post</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          disabled={loading}
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
          disabled={loading}
        />
        <button onClick={createPost} disabled={loading}>
          {loading ? 'Creating...' : 'Submit'}
        </button>
      </div>
      <h3>Posts</h3>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            {post.image_url ? (
              <img
                src={post.image_url}
                alt={post.title}
                style={{ height: '60px' }}
                onError={(e) => {
                  console.error('Image failed to load:', post.image_url);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div>No image available</div>
            )}
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  )
}