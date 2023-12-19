using System;
namespace SecurityService;
public interface ISecurityServiceJwt
{
        byte[] ApplyHash(string pass, string salt);
        string ApplySalt();
        bool PasswordIsCorrect(string pass, string passHashedFromBd, string salt);
}