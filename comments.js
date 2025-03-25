//Create a web server

// Import express module
const express = require('express');
const router = express.Router();
const { Comment } = require('../models/comment');
const { User } = require('../models/user');
const { Post } = require('../models/post');
const { CommentLike } = require('../models/commentLike');
const { CommentDislike } = require('../models/commentDislike');
const { CommentReply } = require('../models/commentReply');
const { CommentReplyLike } = require('../models/commentReplyLike');
const { CommentReplyDislike } = require('../models/commentReplyDislike');
const { auth } = require('../middleware/auth');
const { admin } = require('../middleware/admin');
const { validateComment } = require('../validation/comment');
const { validateCommentLike } = require('../validation/commentLike');
const { validateCommentDislike } = require('../validation/commentDislike');
const { validateCommentReply } = require('../validation/commentReply');
const { validateCommentReplyLike } = require('../validation/commentReplyLike');
const { validateCommentReplyDislike } = require('../validation/commentReplyDislike');

