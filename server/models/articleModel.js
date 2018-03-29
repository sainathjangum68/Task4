var mongoose = require('mongoose');

var article= mongoose.model('articleModel', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  tags: {
    type: Array,
    default: false
  },
  body: {
    type: String,
    default: null
  },
  author: {
    type: String,
    default: null
  },
  creationdate: {
    type: Date,
    
    required:true
  },
  updateDate:{
    type:Date,
    required:true
  }
});

module.exports = {article};