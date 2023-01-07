using SharkUtils;
using UnityEngine;
using UnityEngine.InputSystem;

public class Movement
{
    public PlayerStats Stats;

    public Vector2 RequestedMovement { get => new(GetXMovement(), GetYMovement()); }

    private float GetYMovement()
    {
        float _movement = Keyboard.current.sKey.isPressed ? -1 : 0;
        _movement += Keyboard.current.wKey.isPressed ? 1 : 0;

        if (Keyboard.current.downArrowKey.isPressed || Keyboard.current.upArrowKey.isPressed) _movement = 0; // Cancel out kb input so we don't double up
        _movement += Keyboard.current.downArrowKey.isPressed ? -1 : 0;
        _movement += Keyboard.current.upArrowKey.isPressed ? 1 : 0;

        if (Gamepad.current != null)
        {
            _movement += Gamepad.current.leftStick.up.ReadValue();
            _movement -= Gamepad.current.leftStick.down.ReadValue();
        }

        return ExtraFunctions.Clamp(_movement, Stats.MaxSpeed);
    }

    private float GetXMovement()
    {
        float _movement = Keyboard.current.aKey.isPressed ? -1 : 0;
        _movement += Keyboard.current.dKey.isPressed ? 1 : 0;

        if (Keyboard.current.rightArrowKey.isPressed || Keyboard.current.leftArrowKey.isPressed) _movement = 0; // Cancel out kb input so we don't double up
        _movement += Keyboard.current.rightArrowKey.isPressed ? 1 : 0;
        _movement += Keyboard.current.leftArrowKey.isPressed ? -1 : 0;

        if (Gamepad.current != null)
        {
            _movement -= Gamepad.current.leftStick.left.ReadValue();
            _movement += Gamepad.current.leftStick.right.ReadValue();
        }

        return ExtraFunctions.Clamp(_movement, Stats.MaxSpeed);
    }
}
