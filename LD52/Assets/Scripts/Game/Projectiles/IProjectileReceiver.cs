using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IProjectileReceiver
{
    void OnProjectileReceived(ProjectileData projectile);
    int TeamID { get; }
}
