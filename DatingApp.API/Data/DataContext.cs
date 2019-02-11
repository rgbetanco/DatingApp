using DatingApp.API.bin.Models;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}
        public DbSet<Models.User> Users{ get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // foreing key = likerId & likeeId
            builder.Entity<Like>().HasKey( k => new { k.LikerId, k.LikeeId } );
            // defining a one to many relationship so that one user can like many users
            builder.Entity<Like>().HasOne(u => u.Likee).WithMany( u => u.Likers).HasForeignKey(u => u.LikeeId).OnDelete(DeleteBehavior.Restrict);
            // defining one to many relationship so that one user can be liked by many users
            builder.Entity<Like>().HasOne(u => u.Liker).WithMany( u => u.Likees).HasForeignKey(u => u.LikerId).OnDelete(DeleteBehavior.Restrict);

        }
    }
}