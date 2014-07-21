﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AtTheMovies.Models
{
    public class Movie
    {
        public int Id { get; set; }

        [MaxLength(255)]
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int Length { get; set; }
    }
}