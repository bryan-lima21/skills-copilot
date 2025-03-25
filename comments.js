//Create a web server
// 2. Create a route to handle comments
// 3. Create a route to handle comments by id
// 4. Create a route to handle comments by user id
// 5. Create a route to handle comments by post id
// 6. Create a route to handle comments by user id and post id
// 7. Create a route to handle comments by user id and post id and comment id
// 8. Create a route to handle comments by user id and post id and comment id and comment like id
// 9. Create a route to handle comments by user id and post id and comment id and comment dislike id
// 10. Create a route to handle comments by user id and post id and comment id and comment reply id
// 11. Create a route to handle comments by user id and post id and comment id and comment reply id and comment like id
// 12. Create a route to handle comments by user id and post id and comment id and comment reply id and comment dislike id

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

