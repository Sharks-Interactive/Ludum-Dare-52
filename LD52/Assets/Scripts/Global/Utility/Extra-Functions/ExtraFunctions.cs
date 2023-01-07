using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using DG.Tweening;

namespace SharkUtils
{
    /// <summary>
    /// Purpose: Numerous utility functions and data types
    /// </summary>
    public static class ExtraFunctions
    {
        [Serializable]
        public static class StringKeyedGameObject
        {
            public static string Key;
            public static GameObject Value;
        }

        /// <summary>
        /// Using the Show and Hide canvasgroup functions, make a canvas group visible/invisible
        /// </summary>
        /// <param name="cv"> (Extension Method) </param>
        /// <param name="visible"> Whether this canvas group should be visible </param>
        public static void SetVisible(this CanvasGroup cv, bool visible)
        {
            if (visible) cv.Show();
            else cv.Hide();
        }

        /// <summary>
        /// Returns whether the given canvas group is visible, guesstimating based on it's alpha
        /// </summary>
        /// <param name="cv"> (Extension Method) </param>
        /// <returns> Is the Canvas Group visible </returns>
        public static bool GetVisible(this CanvasGroup cv) => cv.alpha > 0;

        /// <summary>
        /// Toggle's the visibility of a canvas group using the SetVisible and GetVisible functions implemented in this class
        /// </summary>
        /// <param name="cv"> (Extension Method) </param>
        public static void ToggleVisible(this CanvasGroup cv) => cv.SetVisible(!cv.GetVisible());

        /// <summary>
        /// Shows a canvas group, also enabling its interactivity
        /// </summary>
        /// <param name="cv"> (Extension Method) </param>
        public static void Show(this CanvasGroup cv)
        {
            cv.DOFade(1.0f, 0.2f);
            cv.interactable = true;
            cv.blocksRaycasts = true;
        }

        /// <summary>
        /// Hides a canvas group and disables its interactivity
        /// </summary>
        /// <param name="cv"> (Extension Method) </param>
        public static void Hide(this CanvasGroup cv)
        {
            cv.DOFade(0.0f, 0.2f);
            cv.interactable = false;
            cv.blocksRaycasts = false;
        }

        /// <summary>
        /// Checks wether two Quaternions (A and B) are within the acceptable range, used for comparison.
        /// </summary>
        /// <param name="quatA">Quaternion A</param>
        /// <param name="value">Quaternion B</param>
        /// <param name="acceptableRange">The max acceptable difference between Quaternion A and B</param>
        /// <returns></returns>
        public static bool Approximately(this Quaternion quatA, Quaternion value, float acceptableRange)
        {
            return 1 - Mathf.Abs(Quaternion.Dot(quatA, value)) < acceptableRange;
        }

        /// <summary>
        /// Parses a string into a Vector2
        /// </summary>
        /// <param name="strVector"> The vector to parse as a string. </param>
        /// <returns> A Vector2 from the string. </returns>
        public static Vector2 Parse(this string strVector)
        {
            if (strVector.StartsWith("(") && strVector.EndsWith(")"))
                strVector = strVector.Substring(1, strVector.Length - 2);

            string[] sArray = strVector.Split(',');

            Vector2 result = new Vector2(
                float.Parse(sArray[0]),
                float.Parse(sArray[1]));

            return result;
        }

        /// <summary>
        /// Returns a random vector3 with the x, y, and z all random between the input range.
        /// </summary>
        /// <param name="Range"> The input range. </param>
        /// <returns></returns>
        public static Vector3 RandomRangeVec3(Vector2 Range)
        {
            return new Vector3(
                UnityEngine.Random.Range(Range.x, Range.y),
                UnityEngine.Random.Range(Range.x, Range.y),
                UnityEngine.Random.Range(Range.x, Range.y)
            );
        }

        /// <summary>
        /// Set's the active state in all of a transform's children, optionally recursively
        /// </summary>
        /// <param name="gameObject"> (Extension Method) The gameObject whose children we should modify </param>
        /// <param name="activeState"> The state to set each gameobject's active-state to </param>
        /// <param name="recursive"> Whether or not this should be done recursively </param>
        public static void SetActiveInChildren(this GameObject gameObject, bool activeState, bool recursive)
        {
            if (gameObject.transform.childCount < 1) return;

            for (int i = 0; i < gameObject.transform.childCount; i++)
            {
                Transform _elm = gameObject.transform.GetChild(i);

                _elm.gameObject.SetActive(activeState);
                if (recursive && _elm.childCount > 0) _elm.gameObject.SetActiveInChildren(activeState, recursive);
            }
        }

        /// <summary>
        /// Destroys all children of a gameobejct
        /// </summary>
        /// <param name="gameObject"> (Extension Method) The gameObject whose children we should modify </param>
        /// <param name="recursive"> Whether or not this should be done recursively </param>
        public static void DestroyAllChildren(this Transform transform, bool recursive)
        {
            if (transform.childCount < 1) return;

            for (int i = 0; i < transform.childCount; i++)
            {
                Transform _elm = transform.GetChild(i);

                UnityEngine.Object.Destroy(_elm.gameObject);
                if (recursive && _elm.childCount > 0) _elm.DestroyAllChildren(recursive);
            }
        }

        /// <summary>
        /// Functions the same as transform.LookAt but for 2D instances
        /// </summary>
        /// <param name="transform"> The transform to modify (Extension method) </param>
        /// <param name="target"> The look target </param>
        /// <param name="rotationSpeed"> How quickly we should be rotating </param>
        public static void LookAt2D(this Transform transform, Vector3 target, float rotationSpeed)
        {
            transform.up += ((target - transform.position) / rotationSpeed) * Time.deltaTime * 50;
            transform.eulerAngles = new Vector3(0, 0, transform.eulerAngles.z);
        }

        /// <summary>
        /// Builds a Vector3 given a Vec2 and a float
        /// </summary>
        /// <param name="xy"> x and y in the form of a vec2 </param>
        /// <param name="z"> z in the form of a float </param>
        /// <returns></returns>
        public static Vector3 Vector3(Vector2 xy, float z) => new Vector3(xy.x, xy.y, z);

        /// <summary>
        /// Preforms the Round operation on a vec3
        /// </summary>
        /// <param name="vector"></param>
        /// <returns></returns>
        public static Vector3 Round(this Vector3 vector) => new Vector3(Mathf.Round(vector.x), Mathf.Round(vector.y), Mathf.Round(vector.z));

        /// <summary>
        /// Preforms the Round operation on a vec3
        /// </summary>
        /// <param name="vector"></param>
        /// <param name="multiple"></param>
        /// <returns></returns>
        public static Vector3 RoundToMultiple(this Vector3 vector, float multiple) => new Vector3(((vector.x + multiple) / 2) * multiple, ((vector.y + multiple) / 2) * multiple, ((vector.z + multiple) / 2) * multiple);

        /// <summary>
        /// Preforms the Modulo operation on a vec3
        /// </summary>
        /// <param name="vector"></param>
        /// <param name="divisor"></param>
        /// <returns></returns>
        public static Vector3 Modulo(this Vector3 vector, float divisor) => new Vector3(vector.x % divisor, vector.y % divisor, vector.z % divisor);

        /// <summary>
        /// Preforms the Modulo operation on a vec3, adding the result
        /// </summary>
        /// <param name="vector"></param>
        /// <param name="divisor"></param>
        /// <returns></returns>
        public static float ModuloAdd(this Vector3 vector, float divisor) => vector.x % divisor + vector.y % divisor + vector.z % divisor;

        /// <summary>
        /// Get's the midpoint between two vector2's
        /// </summary>
        /// <param name="vector"> The starting vector2 (extension method) </param>
        /// <param name="secondVector"> The second vector2 </param>
        /// <returns> Midpoint of the two vectors </returns>
        public static Vector2 MidPoint(this Vector2 vector, Vector2 secondVector) => new Vector2(((secondVector.x + vector.x) / 2.0f), ((secondVector.y + vector.y) / 2.0f));

        /// <summary>
        /// Clamps a float between the negative and positive of a minMax arg
        /// </summary>
        /// <param name="value"> Value to clamp </param>
        /// <param name="minMax"> Range </param>
        /// <returns></returns>
        public static float Clamp(float value, float minMax) => Mathf.Clamp(value, minMax * -1, minMax);

        /// <summary>
        /// Clamps a float between the negative and positive of a minMax arg
        /// </summary>
        /// <param name="value"> Value to clamp </param>
        /// <param name="minMax"> Range </param>
        /// <returns></returns>
        public static int Clamp(int value, int minMax) => Mathf.Clamp(value, minMax * -1, minMax);

        public static Vector3 Parse(this Vector3 vector, string sVector)
        {
            if (sVector.StartsWith("(") && sVector.EndsWith(")"))
                sVector = sVector.Substring(1, sVector.Length - 2);

            string[] sArray = sVector.Split(',');

            Vector3 result = new Vector3(
                float.Parse(sArray[0]),
                float.Parse(sArray[1]),
                float.Parse(sArray[2]));

            return result;
        }

        public static Vector3 ScreenToCanvasPosition(this Canvas canvas, Vector3 screenPosition)
        {
            var viewportPosition = new Vector3(screenPosition.x / Screen.width,
                                               screenPosition.y / Screen.height,
                                               0);
            return canvas.ViewportToCanvasPosition(viewportPosition);
        }

        public static string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
        public static string Base64Encode(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static Vector3 ViewportToCanvasPosition(this Canvas canvas, Vector3 viewportPosition)
        {
            var centerBasedViewPortPosition = viewportPosition - new Vector3(0.5f, 0.5f, 0);
            var canvasRect = canvas.GetComponent<RectTransform>();
            var scale = canvasRect.sizeDelta;
            return UnityEngine.Vector3.Scale(centerBasedViewPortPosition, scale);
        }

        public static Vector2 Parse(this Vector2 vector, string sVector)
        {
            if (sVector.StartsWith("(") && sVector.EndsWith(")"))
                sVector = sVector.Substring(1, sVector.Length - 2);

            string[] sArray = sVector.Split(',');

            Vector2 result = new Vector2(
                float.Parse(sArray[0]),
                float.Parse(sArray[1]));

            return result;
        }

        /// <summary>
        /// Returns a vector3 along a circle given the center, diamter and angle.
        /// </summary>
        /// <param name="center"> A Vector3 which defines where the center of the circle is. </param>
        /// <param name="d"> The diameter of the circle. </param>
        /// <param name="angle"> The angle from the center to the point. </param>
        /// <returns></returns>
        public static Vector3 FindPosAlongCircleWithAngle(Vector3 center, float d, float angle)
        {
            Vector3 EndPos = new Vector3();

            EndPos.x = d * Mathf.Cos(angle) + center.x;
            EndPos.y = d * Mathf.Sin(angle) + center.y;
            EndPos.z = center.z;

            return EndPos;
        }

        /// <summary>
        /// Returns a random Vector3 worldspace position within a circle whose center is center and radius is r
        /// </summary>
        /// <param name="center"> The world space center of the circle. </param>
        /// <param name="r"> The radius of the circle. </param>
        /// <returns></returns>
        public static Vector3 RandomPointInsideCircle(Vector3 center, float r)
        {
            return UnityEngine.Random.insideUnitSphere * r + center;
        }

        /// <summary>
        /// Exactly like Random.Range except it takes in a single Vector2 for the range.
        /// </summary>
        /// <param name="Range"> A vector 2 representing the range. </param>
        /// <returns></returns>
        public static float RandomFromRange(Vector2 Range)
        {
            return UnityEngine.Random.Range(Range.x, Range.y);
        }

        /// <summary>
        /// THIS IS BAD DONT USE THIS PLEASE! But it uh... Get's interfaces
        /// </summary>
        /// <typeparam name="T"> Interface type </typeparam>
        /// <param name="resultList"> List of interfaces </param>
        /// <param name="objectToSearch"> The object to check if it has an interface </param>
        public static void GetInterfaces<T>(out List<T> resultList, GameObject objectToSearch) where T : class
        {
            MonoBehaviour[] list = objectToSearch.GetComponents<MonoBehaviour>();
            resultList = new List<T>();
            foreach (MonoBehaviour mb in list)
            {
                if (mb is T)
                {
                    //found one
                    resultList.Add((T)((System.Object)mb));
                }
            }
        }

        /// <summary>
        /// THIS IS HORRENDOUS DONT USE THIS PLEASE! But it uh... Get's interfaces
        /// </summary>
        /// <typeparam name="T"> Interface type </typeparam>
        /// <param name="resultList"> List of interfaces </param>
        /// <param name="objectToSearch"> The object to check if it has an interface </param>
        public static void GetAllInterfaces<T>(out List<T> resultList) where T : class
        {
            MonoBehaviour[] list = GameObject.FindObjectsOfType<MonoBehaviour>(true);
            resultList = new List<T>();
            foreach (MonoBehaviour mb in list)
            {
                if (mb is T)
                {
                    //found one
                    resultList.Add((T)((System.Object)mb));
                }
            }
        }

        /// <summary>
        /// Randomly rotates a transform with the following aixs.
        /// </summary>
        /// <param name="t"> Is an extension method so this should not matter, but the current rotation. </param>
        /// <param name="x"> Should we randomize x rotation. </param>
        /// <param name="y"> Should we randomize y rotation. </param>
        /// <param name="z"> Should we randomize z rotation. </param>
        /// <returns></returns>
        public static Quaternion RandomRotationOnAxis(this Transform t, bool x, bool y, bool z)
        {
            Quaternion Rot = UnityEngine.Random.rotation;
            if (!x) { Rot.x = t.rotation.x; }
            if (!y) { Rot.y = t.rotation.y; }
            if (!z) { Rot.z = t.rotation.z; }

            return Rot;
        }

        /// <summary>
        /// Picks a random item from a list.
        /// </summary>
        /// <typeparam name="T"> The object that will be returned. </typeparam>
        /// <param name="L"> The list to pick from. </param>
        /// <returns></returns>
        public static T RandomFromList<T>(List<T> L)
        {
            var value = L[UnityEngine.Random.Range(0, L.Count)];
            return (T)Convert.ChangeType(value, typeof(T));
        }

        /// <summary>
        /// Picks a random item from an array.
        /// </summary>
        /// <typeparam name="T"> The object that will be returned. </typeparam>
        /// <param name="L"> The list to pick from. </param>
        /// <returns></returns>
        public static T Random<T>(this T[] _arr)
        {
            var value = _arr[UnityEngine.Random.Range(0, _arr.Length)];
            return (T)Convert.ChangeType(value, typeof(T));
        }

        /// <summary>
        /// Picks a random number in the range excluding the set numbers.
        /// </summary>
        /// <param name="min"> The lower number of the range. </param>
        /// <param name="max"> The higher number in the range. </param>
        /// <param name="exclude"> The list of numbers to exclude. </param>
        /// <returns></returns>
        public static int RandomNumberExcluding(int min, int max, HashSet<int> exclude)
        {
            var range = Enumerable.Range(min, max).Where(i => !exclude.Contains(i));

            var rand = new System.Random();
            int index = rand.Next(min, max - exclude.Count);
            try
            {
                return range.ElementAt(index);
            }
            catch
            {
                return 9001;
            }
        }

        /// <summary>
        /// Moves the specified item to the front of the list.
        /// </summary>
        /// <typeparam name="T"> (Extension Method) </typeparam>
        /// <param name="list"> The list to modify. </param>
        /// <param name="index"> Index of the item to move. </param>
        public static void MoveItemAtIndexToFront<T>(this List<T> list, int index)
        {
            T item = list[index];
            list.RemoveAt(index);
            list.Insert(0, item);
        }

        // <summary>
        // Sets the specified effect to either enabled or disabled on a postprocessvolume
        // </summary>
        // <param name="PManager"> (Extension Method) </param>
        // <param name="Effect"> The effect to modify. </param>
        // <param name="Enabled"> Whether or not said effect should be enabled. </param>
        //public static void SetEffect (this PostProcessVolume PManager, Postpro Effect, bool Enabled)
        //{
        //    PManager.profile.TryGetSettings(out Effect);
        //    Effect.enabled.value = Enabled;
        //}

        /// <summary>
        /// Tries to remove an item from the list at index
        /// </summary>
        /// <typeparam name="T"> (Extension Method) </typeparam>
        /// <param name="l"> (Extension Method) </param>
        /// <param name="index"> The index of the item to remove. </param>
        public static void TryRemoveAt<T>(this List<T> l, int index)
        {
            try
            {
                l.RemoveAt(index);
            }
            catch
            {
                Debug.LogWarning("TryRemove at: " + index + ". On List " + l.ToString() + ". Failed.");
            }
        }
        /// <summary>
        /// Remove element from array by shifting all elements down and resizing
        /// </summary>
        /// <typeparam name="T"> Array type </typeparam>
        /// <param name="arr"> The array to resize </param>
        /// <param name="index"> The index of the item to remove </param>
        public static void RemoveAt<T>(ref T[] arr, int index)
        {
            for (int a = index; a < arr.Length - 1; a++)
            {
                // moving elements downwards, to fill the gap at [index]
                arr[a] = arr[a + 1];
            }
            // finally, let's decrement Array's size by one
            Array.Resize(ref arr, arr.Length - 1);
        }

        /// <summary>
        /// Returns a random position along the edge of a circle.
        /// </summary>
        /// <param name="radius"> The radius of the circle. </param>
        /// <param name="center"> The center of the circle. </param>
        /// <returns></returns>
        public static Vector3 RandomPointOnCircleEdge(float radius, Vector3 center)
        {
            var vector2 = UnityEngine.Random.insideUnitCircle.normalized * radius;
            return new Vector3(vector2.x + center.x, vector2.y + center.y, vector2.y + center.z);
        }

        public static bool IsInsideCircle(Vector2 Point, Vector2 Center, float Radius) => Vector2.Distance(Center, Point) < Radius;

        /// <summary>
        /// Returns a point along a line defined by the vectors A and B where Percentage determines how far from A it is on a scale of 0 - 1
        /// </summary>
        /// <param name="A"> The first Vector of the line. </param>
        /// <param name="B"> The second Vector of the line. </param>
        /// <param name="Percentage"> Where along the line should we return between 0 and 1. </param>
        /// <returns></returns>
        public static Vector3 PointAlongLine(Vector3 A, Vector3 B, float Percentage)
        {
            return (A + Percentage * (B - A));
        }

        /// <summary>
        /// Used for making random chance applications. Given a percentage will return true or false randomly within the percent specified.
        /// </summary>
        /// <param name="Percentage"> The percentage of time the return value will be true. </param>
        /// <returns></returns>
        public static bool Chance(float Percentage)
        {
            return UnityEngine.Random.Range(0, 100) <= Percentage;
        }

        //Defining a public random for the whole library to use
        private static System.Random rng = new System.Random();

        public static float SumOfVector2(this Vector2 _vector) => _vector.x + _vector.y;
        public static float SumOfVector2(this Vector3 _vector) => _vector.x + _vector.y;

        public static float SumOfVector3(this Vector3 _vector) => _vector.x + _vector.y + _vector.z;

        public static float AbsSumOfVector2(this Vector2 _vector) => Mathf.Abs(_vector.x) + Mathf.Abs(_vector.y);
        public static float AbsSumOfVector2(this Vector3 _vector) => Mathf.Abs(_vector.x) + Mathf.Abs(_vector.y);

        public static float AbsSumOfVector3(this Vector3 _vector) => Mathf.Abs(_vector.x) + Mathf.Abs(_vector.y) + Mathf.Abs(_vector.z);

        public static Vector3 ToVector3(this Vector2 _vector) => new Vector3(_vector.x, _vector.y, 0);

        public static Vector3 ToVector3(this Vector2 _vector, float zValue) => new Vector3(_vector.x, _vector.y, zValue);

        public static Vector2 ToVector2(this Vector3 _vector) => new Vector2(_vector.x, _vector.y);

        public static void SetArrayActive(this GameObject[] _arr, bool Active)
        {
            for (int i = 0; i < _arr.Length; i++)
                _arr[i].SetActive(Active);
        }

        public static Vector3 NormalizedMousePosition()
        {
            float mouseRatioX = Input.mousePosition.x / Screen.width;
            float mouseRatioY = Input.mousePosition.y / Screen.height;

            return new Vector3(mouseRatioX - 0.5f, mouseRatioY - 0.5f, 0f);
        }

        public enum Axis
        {
            X,
            Y,
            Z,
            W
        }
        /// <summary>
        /// Updates a single axis of a Transform
        /// </summary>
        /// <param name="_vector"> (Extension Method) </param>
        /// <param name="Value"> The value to set the axis to. </param>
        /// <param name="Constraint"> The axis to set. </param>
        /// <returns> The update vector3. </returns>
        public static Vector3 UpdateAxis(this Transform _vector, float Value, Axis Constraint)
        {
            switch (Constraint)
            {
                case Axis.X:
                    _vector.position.Set(Value, _vector.position.y, _vector.position.z);
                    break;

                case Axis.Y:
                    _vector.position.Set(_vector.position.x, Value, _vector.position.z);
                    break;

                case Axis.Z:
                    _vector.position.Set(_vector.position.x, _vector.position.y, Value);
                    break;
            }
            return _vector.position;
        }

        /// <summary>
        /// Updates a single axis of a Quaternion
        /// </summary>
        /// <param name="_vector"> (Extension Method) </param>
        /// <param name="Value"> The value to set the axis to. </param>
        /// <param name="Constraint"> The axis to set. </param>
        /// <returns> The update vector3. </returns>
        public static Quaternion UpdateAxis(this Quaternion _quaternion, float Value, Axis Constraint)
        {
            switch (Constraint)
            {
                case Axis.X:
                    _quaternion.Set(Value, _quaternion.y, _quaternion.z, _quaternion.w);
                    break;

                case Axis.Y:
                    _quaternion.Set(_quaternion.x, Value, _quaternion.z, _quaternion.w);
                    break;

                case Axis.Z:
                    _quaternion.Set(_quaternion.x, _quaternion.y, Value, _quaternion.w);
                    break;

                case Axis.W:
                    _quaternion.Set(_quaternion.x, _quaternion.y, _quaternion.z, Value);
                    break;
            }
            return _quaternion;
        }

        //// <summary>
        /// Updates a single axis of a Vector3
        /// </summary>
        /// <param name="_vector"> (Extension Method) </param>
        /// <param name="Value"> The value to set the axis to. </param>
        /// <param name="Constraint"> The axis to set. </param>
        /// <returns> The update vector3. </returns>
        public static Vector3 UpdateAxisEuler(this Vector3 _vector, float Value, Axis Constraint)
        {
            switch (Constraint)
            {
                case Axis.X:
                    _vector.Set(Value, _vector.y, _vector.z);
                    break;

                case Axis.Y:
                    _vector.Set(_vector.x, Value, _vector.z);
                    break;

                case Axis.Z:
                    _vector.Set(_vector.x, _vector.y, Value);
                    break;
            }
            return _vector;
        }


        public static Bounds OrthographicBounds(this Camera camera)
        {
            float screenAspect = (float)Screen.width / (float)Screen.height;
            float cameraHeight = camera.orthographicSize * 2;
            Bounds bounds = new Bounds(
                camera.transform.position,
                new Vector3(cameraHeight * screenAspect, cameraHeight, 0));
            return bounds;
        }

        public static bool RemoveIfContains<T>(this List<T> _list, T element)
        {
            if (!_list.Contains(element)) return false;

            _list.Remove(element);
            return true;
        }

        public static bool AddIfNotContains<T>(this List<T> _list, T element)
        {
            if (!_list.Contains(element)) return false;

            _list.Add(element);
            return true;
        }

        /// <summary>
        /// Counts the bounding box corners of the given RectTransform that are visible from the given Camera in screen space.
        /// </summary>
        /// <returns>The amount of bounding box corners that are visible from the Camera.</returns>
        /// <param name="rectTransform">Rect transform.</param>
        /// <param name="camera">Camera.</param>
        private static int CountCornersVisibleFrom(this RectTransform rectTransform, Camera camera)
        {
            Rect screenBounds = new Rect(0f, 0f, Screen.width, Screen.height); // Screen space bounds (assumes camera renders across the entire screen)
            Vector3[] objectCorners = new Vector3[4];
            rectTransform.GetWorldCorners(objectCorners);

            int visibleCorners = 0;
            Vector3 tempScreenSpaceCorner; // Cached
            for (var i = 0; i < objectCorners.Length; i++) // For each corner in rectTransform
            {
                tempScreenSpaceCorner = camera.WorldToScreenPoint(objectCorners[i]); // Transform world space position of corner to screen space
                if (screenBounds.Contains(tempScreenSpaceCorner) || rectTransform.rect.Contains(screenBounds.center)) // If the corner is inside the screen
                {
                    visibleCorners++;
                }
            }
            return visibleCorners;
        }

        /// <summary>
        /// Determines if this RectTransform is fully visible from the specified camera.
        /// Works by checking if each bounding box corner of this RectTransform is inside the cameras screen space view frustrum.
        /// </summary>
        /// <returns><c>true</c> if is fully visible from the specified camera; otherwise, <c>false</c>.</returns>
        /// <param name="rectTransform">Rect transform.</param>
        /// <param name="camera">Camera.</param>
        public static bool IsFullyVisibleFrom(this RectTransform rectTransform, Camera camera)
        {
            return CountCornersVisibleFrom(rectTransform, camera) == 4; // True if all 4 corners are visible
        }

        /// <summary>
        /// Determines if this RectTransform is at least partially visible from the specified camera.
        /// Works by checking if any bounding box corner of this RectTransform is inside the cameras screen space view frustrum.
        /// </summary>
        /// <returns><c>true</c> if is at least partially visible from the specified camera; otherwise, <c>false</c>.</returns>
        /// <param name="rectTransform">Rect transform.</param>
        /// <param name="camera">Camera.</param>
        public static bool IsVisibleFrom(this RectTransform rectTransform, Camera camera)
        {
            return CountCornersVisibleFrom(rectTransform, camera) > 0; // True if any corners are visible
        }

        //// <summary>
        /// Updates a single axis of a Col9or
        /// </summary>
        /// <param name="_vector"> (Extension Method) </param>
        /// <param name="Value"> The value to set the axis to. </param>
        /// <param name="Constraint"> The axis to set. </param>
        /// <returns> The update vector3. </returns>
        public static Color UpdateColor(this Color _color, float Value, Axis Constraint)
        {
            switch (Constraint)
            {
                case Axis.X:
                    _color = new Color(Value, _color.g, _color.b, _color.a);
                    break;

                case Axis.Y:
                    _color = new Color(_color.r, Value, _color.b, _color.a);
                    break;

                case Axis.Z:
                    _color = new Color(_color.r, _color.g, Value, _color.a);
                    break;

                case Axis.W:
                    _color = new Color(_color.r, _color.g, _color.b, Value);
                    break;
            }
            return _color;
        }


        //public static Color2 GetColor2(this Color[] colors) => new Color2(colors[0], colors[1]);

        public static float Greatest(this float[] _arr)
        {
            float greatest = 0;
            for (int i = 0; i < _arr.Length; i++)
                if (_arr[i] > greatest) greatest = _arr[i];

            return greatest;
        }

        public static int IndexOfGreatest(this float[] _arr)
        {
            float greatest = 0;
            int index = 0;
            for (int i = 0; i < _arr.Length; i++)
                if (_arr[i] > greatest)
                {
                    greatest = _arr[i];
                    index = i;
                }

            return index;
        }

        public static float Least(this float[] _arr)
        {
            float least = 9999999;
            for (int i = 0; i < _arr.Length; i++)
                if (_arr[i] > least) least = _arr[i];

            return least;
        }

        public static int IndexOfLeast(this float[] _arr)
        {
            float least = 9999999;
            int index = 0;
            for (int i = 0; i < _arr.Length; i++)
                if (_arr[i] < least)
                {
                    least = _arr[i];
                    index = i;
                }

            return index;
        }

        /// <summary>
        /// Shuffles all of the elements in a list.
        /// </summary>
        /// <typeparam name="T"> The List type (Is an extension method) </typeparam>
        /// <param name="list"> The list to shuffle (Is and extension method)</param>
        public static void Shuffle<T>(this IList<T> list)
        {
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                (list[n], list[k]) = (list[k], list[n]);
            }
        }

        /// <summary>
        /// Remaps a given value from a given range into a new range.
        /// </summary>
        /// <param name="Value"> The value to remap. </param>
        /// <param name="From1"> The input values lowest possible amount. </param>
        /// <param name="To1"> The input values highest possible amount. </param>
        /// <param name="From2"> The remap range low. </param>
        /// <param name="To2"> The remap range high. </param>
        /// <returns></returns>
        public static float Remap(this float Value, float From1, float To1, float From2, float To2)
        {
            return (Value - From1) / (To1 - From1) * (To2 - From2) + From2;
        }
    }

    /// <summary>
    /// Data type representing a point in a world (Position and rotation)
    /// </summary>
    [Serializable]
    public class WorldPoint
    {
        public Vector3 Pos;
        public Quaternion Rot;
    }

    /// <summary>
    /// Data type representing a point in a world in euler angles (Position and rotation)
    /// </summary>
    [Serializable]
    public class VectorWorldPoint
    {
        public Vector3 Pos;
        public Vector3 Rot;
    }

    /// <summary>
    /// Vector3 where all three values are the same (CubedVector3)
    /// </summary>
    [Serializable]
    public class SquaredVector3
    {
        public Vector3 Value = new();
        public float ScaleFactor { get => Value.x; set => Value = new Vector3(value, value, value); }

        public SquaredVector3(float V) => Value = new Vector3(V, V, V);

        public static implicit operator Vector3(SquaredVector3 v) => v.Value;
    }

    /// <summary>
    /// Vector2 where all values are the same
    /// </summary>
    [Serializable]
    public class SquaredVector2
    {
        public Vector2 Value = new();
        public float ScaleFactor { get => Value.x; set => Value = new Vector2(value, value); }

        public SquaredVector2(float V) => Value = new Vector2(V, V);

        public static implicit operator Vector2(SquaredVector2 v) => v.Value;
    }

    /// <summary>
    /// Opens a specified URL when told
    /// </summary>
    public class URL : MonoBehaviour
    {
        public string Website;

        public void OpenURL() => Application.OpenURL(Website);

        public void OpenURL(string Url) => Application.OpenURL(Url);
    }
}
