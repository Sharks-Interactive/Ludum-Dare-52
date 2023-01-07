using UnityEngine;

public class AmmoConstraint : MonoBehaviour, IWeaponConstraint
{
    public float Ammunition = 100;
    public float Consumption = 1;

    public bool TryUse()
    {
        if (Ammunition < Consumption) return false;

        Ammunition -= Consumption;
        return true;
    }
}
