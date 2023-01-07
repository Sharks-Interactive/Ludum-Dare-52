using UnityEngine;
using UnityEngine.InputSystem;
using SharkUtils;

public class PlayerWeaponController : MonoBehaviour
{
    public Weapon CurrentWeapon;

    private void Update()
    {
        CurrentWeapon.Target = 
            Context.current.MainCamera.ScreenToWorldPoint(Mouse.current.position.ReadValue()). 
                UpdateAxisEuler(0, ExtraFunctions.Axis.Z);

        if (Mouse.current.leftButton.wasPressedThisFrame)
            CurrentWeapon.Shoot();
    }
}
