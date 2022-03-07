import React from 'react'
import './post.scss'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import InputOption from '../InputOption/input-option'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'
import SendIcon from '@mui/icons-material/Send'

export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Me Gusta" color="gray" />
        <InputOption Icon={CommentIcon} title="Comentar" />
        <InputOption Icon={ShareIcon} title="Compartir" />
        <InputOption Icon={SendIcon} title="Enviar" />
      </div>
    </div>
  )
}

Post.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  message: PropTypes.string,
  photoUrl: PropTypes.string
}