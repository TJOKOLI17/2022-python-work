"""Examples of a class and objects - Making a Twitter profile"""
"""python -m lessons.profile"""

class Profile:
    handle: str
    followers: int
    is_private: bool

    def __init__(self, handle: str, followers: int):
        """Constructor initializes attributes!"""
        self.handle = handle
        self.followers = followers
        self.is_private = False


    def tweet(self, msg: str) -> None:
        """An example of a method - sending a Tweet."""
        print(f"@{self.handle} tweets {msg}")


my_profile: Profile = Profile("tj.okoli", 100000)

print()
my_profile.tweet("Hey y'all it's ya boy T")