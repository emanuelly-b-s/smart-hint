using System;
using System.Text;
using System.Security.Cryptography;

namespace SecurityService;

public class SecurityServiceJwt : ISecurityServiceJwt
{

    public string ApplySalt()
    {
        Random rand = new();
        int length = 12;

        byte[] salt = new byte[length];
        rand.NextBytes(salt);

        var saltTo64 = Convert.ToBase64String(salt);

        return saltTo64;
    }
    public byte[] ApplyHash(string pass, string salt)
    {

        var passSalt = pass + salt;
        var bytePasswordSalt = Encoding.UTF8.GetBytes(passSalt);
        var byteHash = SHA256.HashData(bytePasswordSalt);

        return byteHash;
    }
    public bool PasswordIsCorrect(string pass, string passHashDTB, string salt)
    {
        var passwordHashed = ApplyHash(pass, salt);
        var passHashed64 = Convert.ToBase64String(passwordHashed);

        if (passHashDTB == passHashed64)
            return true;

        return false;

    }

}